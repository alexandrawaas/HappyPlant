package com.happyplant.backend.utility

import com.happyplant.backend.model.User
import com.happyplant.backend.repository.UserRepository
import kotlinx.coroutines.runBlocking
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.transaction.annotation.Transactional
import org.springframework.stereotype.Component

@Component
class UserAutoDelete( private val userRepository: UserRepository) {

    @Scheduled(cron = "0 0 0/1 * * *")
    @Transactional
    fun deleteUnverifiedUsers() {
        val currentDateTime = System.currentTimeMillis()

        val unverifiedUsers = userRepository.findAllUnverifiedUsersWithExpiredOtp(currentDateTime)

        unverifiedUsers.forEach { user ->
            userRepository.delete(user)
            println("User ${user.email} deleted due to unverified email within expiration period.")
        }
    }

}