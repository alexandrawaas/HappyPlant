package com.happyplant.backend.repository

import com.happyplant.backend.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.util.*

interface UserRepository : JpaRepository<User, UUID> {
    fun findByEmail(email: String): User?

    @Query("SELECT u FROM User u WHERE u.emailVerified = false AND u.verifyEmailOtp.expires < :currentDateTime")
    fun findAllUnverifiedUsersWithExpiredOtp(currentDateTime: Long): List<User>
}
