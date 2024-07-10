package com.happyplant.backend.controller

import org.springframework.http.ResponseEntity
import org.springframework.http.HttpStatus
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import jakarta.validation.Valid
import jakarta.servlet.http.HttpServletRequest
import com.happyplant.backend.service.AuthService
import com.happyplant.backend.datatransfer.auth.CredentialsDto
import com.happyplant.backend.datatransfer.auth.ResetPasswordDto
import com.happyplant.backend.datatransfer.auth.UpdatePasswordDto
import com.happyplant.backend.datatransfer.user.UserDto

@RestController
@RequestMapping("auth")
@Validated
class AuthController(private val authService: AuthService) {

    @PostMapping("/register")
    fun register(@Valid @RequestBody user: CredentialsDto): ResponseEntity<UserDto> {
        val response = authService.registerUser(user)
        return ResponseEntity.status(HttpStatus.CREATED).body(response)
    }

    @PostMapping("/login")
    fun login(@Valid @RequestBody user: CredentialsDto): ResponseEntity<Map<String, Any>> {
        val response = authService.login(user)
        return ResponseEntity.ok(response)
    }

    @PostMapping("/logout")
    fun logout(request: HttpServletRequest): ResponseEntity<String> {
        authService.logout(request)
        return ResponseEntity.ok("Logout successful")
    }

    @PostMapping("/password/reset")
    fun resetPassword(@Valid @RequestBody request: ResetPasswordDto): ResponseEntity<Map<String, String>> {
        val response = authService.resetPassword(request)
        return ResponseEntity.ok(response)
    }

    @PostMapping("/password/update")
    fun updatePassword(@Valid @RequestBody request: UpdatePasswordDto): ResponseEntity<String> {
        authService.updatePassword(request)
        return ResponseEntity.ok("Password updated successfully")
    }

    @GetMapping("/verify")
    fun verifyEmail(@Valid @RequestBody request: VerifyEmailDto): ResponseEntity<UserDto> {
        val response = authService.verifyEmail(request)
        return ResponseEntity.ok(response)
    }
}