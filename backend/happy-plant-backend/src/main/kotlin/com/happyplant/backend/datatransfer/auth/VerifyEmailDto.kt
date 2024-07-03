package com.happyplant.backend.datatransfer.auth

import jakarta.validation.constraints.*

data class VerifyEmailDto(
    
    @field:NotBlank(message = "Email verification token is required")
    val verifyEmailToken: String,

    @field:NotBlank(message = "Email verification code is required")
    val verifyEmailCode: Int,
)