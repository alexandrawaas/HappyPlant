package com.happyplant.backend.utilities

import org.springframework.http.HttpStatus

data class ApiResponse<T>(
    val success: Boolean,
    val message: String?,
    val data: T?,
    val status: HttpStatus
)