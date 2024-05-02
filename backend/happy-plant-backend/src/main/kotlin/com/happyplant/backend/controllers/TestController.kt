package com.happyplant.backend.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping


@RestController
@RequestMapping("test")
class TestController {
    @GetMapping("/secure")
    fun secureEndpoint(): Map<String, String> {
        val message = "Secure Endpoint reached!"
        return mapOf("message" to message)
    }

    private fun extractTokenFromAuthorizationHeader(authorizationHeader: String): String {
        val tokenPrefix = "Bearer "
        return authorizationHeader.substringAfter(tokenPrefix)
    }

    @GetMapping("/unsecure")
    fun unsecureEndpoint(): Map<String, String> {
        val message = "Unsecure Endpoint reached!"
        return mapOf("message" to message)
    }
}