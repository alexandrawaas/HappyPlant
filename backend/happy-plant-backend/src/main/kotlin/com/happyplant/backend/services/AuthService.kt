package com.happyplant.backend.services

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Qualifier
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import java.util.*
import java.security.MessageDigest
import jakarta.servlet.http.HttpServletRequest
import com.happyplant.backend.datasource.UserRepository
import com.happyplant.backend.utilities.AuthTokenUtil
import com.happyplant.backend.utilities.ApiResponse
import com.happyplant.backend.utilities.AuthTokenBlacklist
import com.happyplant.backend.datatransfer.auth.CredentialsDTO
import com.happyplant.backend.datatransfer.auth.ResetPasswordDTO
import com.happyplant.backend.datatransfer.auth.UpdatePasswordDTO
import com.happyplant.backend.datatransfer.UserDTO
import com.happyplant.backend.models.User

@Service
class AuthService(
    private val userRepository: UserRepository,
    private val emailService: EmailService,
    private val authTokenUtil: AuthTokenUtil
) {
    fun registerUser(user: CredentialsDTO): ApiResponse<UserDTO> {
        val existingUser = userRepository.findByEmail(user.email)
        if (existingUser != null) {
            return ApiResponse(false, "User with this email already exists", null, HttpStatus.BAD_REQUEST)
        }

        val newUser = User (
            email = user.email,
            password = hashPassword(user.password),
            emailVerified = false,
            emailVerificationToken = UUID.randomUUID().toString(),
            emailVerificationExpires = System.currentTimeMillis() + 600000,
            receivePushNotifications = false, // TOOD
            pushNotificationsTime = null // TODO
            // plants = ArrayList(),
            // rooms = ArrayList()
        )
        userRepository.save(newUser)

        emailService.sendEmailVerificationEmail(newUser, newUser.emailVerificationToken!!)

        val userDto = newUser.toDto()

        return ApiResponse(true, "User registered successfully", userDto, HttpStatus.CREATED)
    }

    fun login(user: CredentialsDTO): ApiResponse<Map<String, Any>> {
        val existingUser = userRepository.findByEmail(user.email)
            ?: return ApiResponse(false, "Invalid credentials", null, HttpStatus.UNAUTHORIZED)

        if (!checkPassword(user.password, existingUser.password)) {
            return ApiResponse(false, "Invalid credentials", null, HttpStatus.UNAUTHORIZED)
        }

        if (!existingUser.emailVerified) {
            return ApiResponse(false, "Email not verified", null, HttpStatus.UNAUTHORIZED)
        }

        val accessToken = authTokenUtil.generateToken(mapOf("userId" to existingUser.id), existingUser)
        
        val responseBody = mapOf("user" to existingUser.toDto(), "accessToken" to accessToken)

        return ApiResponse(true, "User logged in successfully", responseBody, HttpStatus.OK)
    }

    fun logout(request: HttpServletRequest): ApiResponse<String> {
        val token = extractTokenFromRequest(request)
        if (token != null) {
            AuthTokenBlacklist.addToken(token)
            return ApiResponse(true, "Logout successful", null, HttpStatus.OK)
        }
        return ApiResponse(false, "No token provided in the request", null, HttpStatus.BAD_REQUEST)
    }

    private fun extractTokenFromRequest(request: HttpServletRequest): String? {
        val authHeader = request.getHeader("Authorization")
        return if (authHeader != null && authHeader.startsWith("Bearer ")) {
            authHeader.substring(7)
        } else {
            null
        }
    }

    fun resetPassword(request: ResetPasswordDTO): ApiResponse<Map<String, String>> {
        val user = userRepository.findByEmail(request.email)
            ?: return ApiResponse(false, "User with this email does not exist", null, HttpStatus.BAD_REQUEST)

        val resetPasswordToken = UUID.randomUUID().toString()
        user.resetPasswordToken = resetPasswordToken
        user.resetPasswordExpires = System.currentTimeMillis() + 600000
        val resetPasswordCode = Random().nextInt(10000, 100000)
        user.resetPasswordCode = resetPasswordCode
        userRepository.save(user)

        emailService.sendResetPasswordEmail(user, resetPasswordCode)

        val responseData = mapOf("resetPasswordToken" to resetPasswordToken)
        return ApiResponse(true, "Reset password email sent successfully", responseData, HttpStatus.OK)
    }

    fun updatePassword(request: UpdatePasswordDTO): ApiResponse<String> {
        val user = userRepository.findByResetPasswordToken(request.resetPasswordToken)
            ?: return ApiResponse(false, "Invalid reset password token", null, HttpStatus.BAD_REQUEST)

        if (user.resetPasswordExpires!! < System.currentTimeMillis()) {
            return ApiResponse(false, "Reset password token has expired", null, HttpStatus.BAD_REQUEST)
        }

        if (user.resetPasswordCode != request.resetPasswordCode) {
            return ApiResponse(false, "Invalid reset password code", null, HttpStatus.BAD_REQUEST)
        }

        user.password = hashPassword(request.newPassword)
        user.resetPasswordToken = null
        user.resetPasswordExpires = null
        user.resetPasswordCode = null
        userRepository.save(user)

        return ApiResponse(true, "Password updated successfully", null, HttpStatus.OK)
    }

    fun verifyEmail(verifyEmailToken: String): ApiResponse<UserDTO> {
        val user = userRepository.findByEmailVerificationToken(verifyEmailToken)
            ?: return ApiResponse(false, "Invalid email verification token", null, HttpStatus.BAD_REQUEST)

        if (user.emailVerificationExpires != null && user.emailVerificationExpires!! < System.currentTimeMillis()) {
            return ApiResponse(false, "Email verification token has expired", null, HttpStatus.BAD_REQUEST)
        }

        user.emailVerified = true
        user.emailVerificationToken = null
        user.emailVerificationExpires = null
        userRepository.save(user)

        val userDto = user.toDto()

        return ApiResponse(true, "Email verified successfully", userDto, HttpStatus.OK)
    }

    private fun hashPassword(password: String): String {
        val md = MessageDigest.getInstance("SHA-256")
        val hashBytes = md.digest(password.toByteArray())
        return hashBytes.joinToString("") { "%02x".format(it) }
    }

    private fun checkPassword(plainPassword: String, hashedPassword: String): Boolean {
        return hashPassword(plainPassword) == hashedPassword
    }
}