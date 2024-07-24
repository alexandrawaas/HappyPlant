package com.happyplant.backend.datatransfer.auth

import jakarta.validation.constraints.*

data class VerifyEmailDto(
    
    @field:NotBlank(message = "Email address is required")
    val email: String,

    @field:NotBlank(message = "OTP is required")
    val verifyEmailOtp: String,
)