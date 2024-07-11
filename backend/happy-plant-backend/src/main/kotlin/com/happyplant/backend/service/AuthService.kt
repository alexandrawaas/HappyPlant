package com.happyplant.backend.service

import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.util.*
import java.security.MessageDigest
import jakarta.servlet.http.HttpServletRequest
import com.happyplant.backend.repository.UserRepository
import com.happyplant.backend.repository.VerifyEmailOtpRepository
import com.happyplant.backend.repository.ResetPasswordOtpRepository
import com.happyplant.backend.utility.AuthTokenUtil
import com.happyplant.backend.utility.AuthTokenBlacklist
import com.happyplant.backend.datatransfer.auth.CredentialsDto
import com.happyplant.backend.datatransfer.auth.ResetPasswordDto
import com.happyplant.backend.datatransfer.auth.UpdatePasswordDto
import com.happyplant.backend.datatransfer.auth.VerifyEmailDto
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.datatransfer.user.asDto
import com.happyplant.backend.model.User
import com.happyplant.backend.model.VerifyEmailOtp
import com.happyplant.backend.model.ResetPasswordOtp
import java.time.LocalTime
import kotlin.concurrent.thread

@Service
class AuthService(
    private val userRepository: UserRepository,
    private val verifyEmailOtpRepository: VerifyEmailOtpRepository,
    private val resetPasswordOtpRepository: ResetPasswordOtpRepository,
    private val emailService: EmailService,
    private val authTokenUtil: AuthTokenUtil
) {
    fun registerUser(user: CredentialsDto): UserDto {
        val errorMessage = validateCredentials(user)
        if (errorMessage.isNotEmpty()) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, errorMessage)
        }

        val existingUser = userRepository.findByEmail(user.email.lowercase())
        if (existingUser != null) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "User with this email already exists")
        }

        val verifyEmailCode = Random().nextInt(100000, 1000000).toString().padStart(6, '0')
        val verifyEmailOtp = VerifyEmailOtp (
            expires = System.currentTimeMillis() + 1800000,
            otp = verifyEmailCode,
        )
        val newUser = User (
            email = user.email.lowercase(),
            passwordHash = hashPassword(user.password),
            emailVerified = false,
            verifyEmailOtp = verifyEmailOtp,
            resetPasswordOtp = null,
            receivePushNotifications = true,
            pushNotificationToken = user.pushNotificationToken,
            pushNotificationsTime = LocalTime.of(10, 0), //TODO Standard
            plants = mutableListOf(),
            rooms = mutableListOf()
        )

        userRepository.save(newUser)

        emailService.sendEmailVerificationEmail(newUser, verifyEmailCode)

        return newUser.asDto()
    }

    fun verifyEmail(request: VerifyEmailDto): UserDto {
        val user = userRepository.findByEmail(request.email.lowercase())
            ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email address")

        val verifyEmailOtp = user.verifyEmailOtp
            ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "No email verification code found")

        val currentTime = System.currentTimeMillis()
        if (verifyEmailOtp.expires!! < currentTime) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Email verification code has expired")
        }

        Thread.sleep(1000)

        if (verifyEmailOtp.otp != request.verifyEmailOtp) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email verification code")
        }

        user.emailVerified = true
        user.verifyEmailOtp = null
        verifyEmailOtpRepository.delete(verifyEmailOtp)
        userRepository.save(user)

        return user.asDto()
    }

    fun login(user: CredentialsDto): Map<String, Any> {
        val existingUser = userRepository.findByEmail(user.email.lowercase())
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials")

        if (!checkPassword(user.password, existingUser.passwordHash)) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials")
        }

        if (!existingUser.emailVerified) {
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials")
        }

        val authToken = authTokenUtil.generateToken(existingUser.id, existingUser)
        
        return mapOf("user" to existingUser.asDto(), "authToken" to authToken)
    }

    fun logout(request: HttpServletRequest) {
        val token = extractTokenFromRequest(request)
        if (token != null) {
            AuthTokenBlacklist.addToken(token)
        } else {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "No token provided in the request")
        }
    }

    fun resetPassword(request: ResetPasswordDto) {
        val user = userRepository.findByEmail(request.email.lowercase())
            ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "User with this email does not exist")

        val resetPasswordCode = Random().nextInt(100000, 1000000).toString().padStart(6, '0')
        val resetPasswordOtp = ResetPasswordOtp(
            expires = System.currentTimeMillis() + 600000,
            otp = resetPasswordCode
        )

        user.resetPasswordOtp = resetPasswordOtp
        userRepository.save(user)

        emailService.sendResetPasswordEmail(user, resetPasswordCode)
    }

    fun updatePassword(request: UpdatePasswordDto) {
        val user = userRepository.findByEmail(request.email.lowercase())
            ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid email address")

        val resetPasswordOtp = user.resetPasswordOtp
            ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "No reset password code found")

        val currentTime = System.currentTimeMillis()
        if (resetPasswordOtp.expires!! < currentTime) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Reset password code has expired")
        }

        Thread.sleep(1000)
    
        if (resetPasswordOtp.otp != request.resetPasswordOtp) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid reset password code")
        }

        user.passwordHash = hashPassword(request.newPassword)
        user.resetPasswordOtp = null
        resetPasswordOtpRepository.delete(resetPasswordOtp)
        userRepository.save(user)
    }

    private fun extractTokenFromRequest(request: HttpServletRequest): String? {
        val authHeader = request.getHeader("Authorization")
        return if (authHeader != null && authHeader.startsWith("Bearer ")) {
            authHeader.substring(7)
        } else {
            null
        }
    }

    private fun hashPassword(password: String): String {
        val md = MessageDigest.getInstance("SHA-256")
        val hashBytes = md.digest(password.toByteArray())
        return hashBytes.joinToString("") { "%02x".format(it) }
    }

    private fun checkPassword(plainPassword: String, hashedPassword: String): Boolean {
        return hashPassword(plainPassword) == hashedPassword
    }

    private fun validateCredentials(user: CredentialsDto): String {
        val emailError = validateEmail(user.email.lowercase())
        val passwordError = validatePassword(user.password)
        
        val errorMessageBuilder = StringBuilder()
        if (emailError != null) {
            errorMessageBuilder.append("$emailError\n")
        }
        if (passwordError != null) {
            errorMessageBuilder.append("$passwordError\n")
        }
        
        return errorMessageBuilder.toString().trim()
    }
    
    private fun validateEmail(email: String): String? {
        return if (!email.matches(Regex("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"))) {
            "Invalid email format"
        } else {
            null
        }
    }
    
    private fun validatePassword(password: String): String? {
        return if (!password.matches(Regex("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+\$).{8,}\$"))) {
            "Password must be at least 8 characters long and contain at least one digit, one lowercase, and one uppercase letter"
        } else {
            null
        }
    }
}