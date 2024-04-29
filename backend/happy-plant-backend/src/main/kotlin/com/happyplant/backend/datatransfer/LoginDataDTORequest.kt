package com.happyplant.backend.datatransfer

data class LoginDataDTORequest(
        val email: String,
        val passwordHash: String,
) {

}