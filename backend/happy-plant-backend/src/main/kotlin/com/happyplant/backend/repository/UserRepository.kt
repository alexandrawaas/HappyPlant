package com.happyplant.backend.repository

import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID
import com.happyplant.backend.model.User
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, UUID> {
    fun findByEmail(email: String): User?
    fun findByResetPasswordToken(resetPasswordToken: String): User?
    fun findByEmailVerificationToken(emailVerificationToken: String): User?
}
