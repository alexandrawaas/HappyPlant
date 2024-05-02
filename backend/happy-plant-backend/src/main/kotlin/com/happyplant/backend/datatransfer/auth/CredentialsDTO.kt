package com.happyplant.backend.datatransfer.auth

import jakarta.validation.constraints.*

data class CredentialsDTO(
    
    @Email
    val email: String,

    @field:NotBlank(message = "Password is required")
    @field:Pattern(
        regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$",
        message = "Password must be at least 8 characters long and contain at least one digit, one lowercase and one uppercase letter"
    )
    var password: String
)
