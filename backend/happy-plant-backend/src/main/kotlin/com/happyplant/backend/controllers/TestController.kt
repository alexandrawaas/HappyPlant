package com.happyplant.backend.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import com.happyplant.backend.models.User
import com.happyplant.backend.datatransfer.UserDTO
import com.happyplant.backend.datasource.UserRepository
import com.happyplant.backend.utilities.AuthTokenUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RequestHeader
import java.util.Optional


@RestController
@RequestMapping("test")
class TestController {

    @Autowired 
    private lateinit var userRepository: UserRepository

    @Autowired
    private lateinit var authTokenUtil: AuthTokenUtil

    @GetMapping("/secure")
    fun secureEndpoint(): Map<String, String> {
        val message = "Secure Endpoint reached!"
        return mapOf("message" to message)
    }

    @GetMapping("/user")
    fun getCurrentUser(@RequestHeader("Authorization") token: String): UserDTO? {
        val userEmail = authTokenUtil.getUserEmailFromToken(extractTokenFromAuthorizationHeader(token))
        return if (userEmail != null) {
            val user: User? = userRepository.findByEmail(userEmail)
            user?.toDto()
        } else {
            null
        }
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