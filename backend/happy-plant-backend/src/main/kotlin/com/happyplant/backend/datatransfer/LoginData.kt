package com.happyplant.backend.datatransfer

data class LoginData(
        val email: String,
        val passwordHash: String,
) {

}