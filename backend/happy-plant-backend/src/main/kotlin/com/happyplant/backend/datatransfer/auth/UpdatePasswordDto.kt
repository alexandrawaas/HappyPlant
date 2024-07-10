package com.happyplant.backend.datatransfer.auth

import jakarta.validation.constraints.*

data class UpdatePasswordDto(
    
    @field:NotBlank(message = "Email address is required")
    val email: String,

    @field:NotBlank(message = "OTP is required")
    val resetPasswordOtp: String,

    @field:NotBlank(message = "New password is required")
    @field:Pattern(
        regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$",
        message = "New password must be at least 8 characters long and contain at least one digit, one lowercase and one uppercase letter"
    )
    val newPassword: String
)