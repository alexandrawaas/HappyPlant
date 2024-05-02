package com.happyplant.backend.utility

import org.springframework.http.HttpStatus

data class ApiResponse<T>(
    val success: Boolean,
    val message: String?,
    val data: T?,
    val status: HttpStatus
)