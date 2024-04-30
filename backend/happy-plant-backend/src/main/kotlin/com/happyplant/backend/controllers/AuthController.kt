package com.happyplant.backend.controllers

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import jakarta.validation.Valid
import jakarta.servlet.http.HttpServletRequest
import com.happyplant.backend.services.AuthService
import com.happyplant.backend.datatransfer.auth.CredentialsDTO
import com.happyplant.backend.datatransfer.auth.ResetPasswordDTO
import com.happyplant.backend.datatransfer.auth.UpdatePasswordDTO
import com.happyplant.backend.datatransfer.UserDTO
import com.happyplant.backend.utilities.ApiResponse

@RestController
@RequestMapping("auth")
@Validated
class AuthController(private val authService: AuthService) {

    @PostMapping("/register")
    fun register(@Valid @RequestBody user: CredentialsDTO): ResponseEntity<ApiResponse<UserDTO>> {
        val response = authService.registerUser(user)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/login")
    fun login(@Valid @RequestBody user: CredentialsDTO): ResponseEntity<ApiResponse<Map<String, Any>>> {
        val response = authService.login(user)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/logout")
    fun logout(request: HttpServletRequest): ResponseEntity<ApiResponse<String>> {
        val response = authService.logout(request)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/password/reset")
    fun resetPassword(@RequestBody request: ResetPasswordDTO): ResponseEntity<ApiResponse<Map<String, String>>> {
        val response = authService.resetPassword(request)
        return ResponseEntity.status(response.status).body(response)
    }

    @PostMapping("/password/update")
    fun updatePassword(@RequestBody request: UpdatePasswordDTO): ResponseEntity<ApiResponse<String>> {
        val response = authService.updatePassword(request)
        return ResponseEntity.status(response.status).body(response)
    }

    @GetMapping("/verify")
    fun verifyEmail(@RequestParam("token") verifyEmailToken: String): ResponseEntity<ApiResponse<UserDTO>> {
        val response = authService.verifyEmail(verifyEmailToken)
        return ResponseEntity.status(response.status).body(response)
    }
}
