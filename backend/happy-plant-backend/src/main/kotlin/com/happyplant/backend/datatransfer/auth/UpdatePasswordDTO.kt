package com.happyplant.backend.datatransfer.auth

import jakarta.validation.constraints.*

data class UpdatePasswordDTO(
    
    @field:NotBlank(message = "Reset password token is required")
    val resetPasswordToken: String,

    @field:NotBlank(message = "Reset password code is required")
    val resetPasswordCode: Int,

    @field:NotBlank(message = "New password is required")
    @field:Pattern(
        regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$",
        message = "New password must be at least 8 characters long and contain at least one digit, one lowercase and one uppercase letter"
    )
    val newPassword: String
)