package com.happyplant.backend.datasource

import jakarta.persistence.*
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID
import com.happyplant.backend.models.User

interface UserRepository : JpaRepository<User, UUID> {
    fun findByEmail(email: String): User?
    fun findByResetPasswordToken(resetPasswordToken: String): User?
    fun findByEmailVerificationToken(emailVerificationToken: String): User?
}