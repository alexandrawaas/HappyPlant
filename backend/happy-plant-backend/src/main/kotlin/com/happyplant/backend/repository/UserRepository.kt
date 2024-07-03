package com.happyplant.backend.repository

import com.happyplant.backend.model.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface UserRepository : JpaRepository<User, UUID> {
    fun findByEmail(email: String): User?
    fun findByMultiToken(multiToken: String): User?
}
