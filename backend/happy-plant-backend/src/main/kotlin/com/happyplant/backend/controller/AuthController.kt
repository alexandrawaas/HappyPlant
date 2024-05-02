package com.happyplant.backend.controller

import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import jakarta.validation.Valid
import jakarta.servlet.http.HttpServletRequest
import com.happyplant.backend.service.AuthService
import com.happyplant.backend.datatransfer.auth.CredentialsDto
import com.happyplant.backend.datatransfer.auth.ResetPasswordDto
import com.happyplant.backend.datatransfer.auth.UpdatePasswordDto
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.utility.ApiResponse

@RestController
@RequestMapping("auth")
@Validated
class AuthController(private val authService: AuthService) {

    @PostMapping("/register")
    fun register(@Valid @RequestBody user: CredentialsDto): ResponseEntity<ApiResponse<UserDto>> {
        val response = authService.registerUser(user)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/login")
    fun login(@Valid @RequestBody user: CredentialsDto): ResponseEntity<ApiResponse<Map<String, Any>>> {
        val response = authService.login(user)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/logout")
    fun logout(request: HttpServletRequest): ResponseEntity<ApiResponse<String>> {
        val response = authService.logout(request)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/password/reset")
    fun resetPassword(@RequestBody request: ResetPasswordDto): ResponseEntity<ApiResponse<Map<String, String>>> {
        val response = authService.resetPassword(request)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/password/update")
    fun updatePassword(@RequestBody request: UpdatePasswordDto): ResponseEntity<ApiResponse<String>> {
        val response = authService.updatePassword(request)
        return ResponseEntity.status(response.status).body(response)
    }

    @GetMapping("/verify")
    fun verifyEmail(@RequestParam("token") verifyEmailToken: String): ResponseEntity<ApiResponse<UserDto>> {
        val response = authService.verifyEmail(verifyEmailToken)
        return ResponseEntity.status(response.status).body(response)
    }
}
