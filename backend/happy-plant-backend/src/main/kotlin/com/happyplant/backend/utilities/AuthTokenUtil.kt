package com.happyplant.backend.utilities

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.happyplant.backend.models.User
import org.springframework.stereotype.Component
import java.util.*

@Component
class AuthTokenUtil {

    private val secret = "onqK5diTq1My9QJr8Bi8gEh3rzuuztjftitfo76fogonqK5diTq1My9QJr8Bi8gEh3rzuuztjftitfo76fog"
    private val algorithm: Algorithm = Algorithm.HMAC512(secret)

    private val now = System.currentTimeMillis()
    private val expiration = Date(now + 3600000)

    fun generateToken(extraClaims: Map<String, UUID?>, user: User): String {
        return JWT.create()
            .withSubject(user.email)
            .withIssuedAt(Date(now))
            .withExpiresAt(expiration)
            .sign(algorithm)
    }

    fun validateToken(token: String): Boolean {
        return try {
            JWT.require(algorithm)
                .build()
                .verify(token)
            true
        } catch (e: Exception) {
            false
        }
    }

    fun getUserEmailFromToken(token: String): String? {
        return try {
            val jwt = JWT.require(algorithm)
                .build()
                .verify(token)
            jwt.subject
        } catch (e: Exception) {
            null
        }
    }
}
