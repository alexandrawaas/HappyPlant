package com.happyplant.backend.service

import com.happyplant.backend.repository.UserRepository
import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.model.User
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.datatransfer.user.asDto
import com.happyplant.backend.utility.AuthTokenUtil
import com.happyplant.backend.utility.ApiResponse
import org.springframework.stereotype.Service
import org.springframework.http.HttpStatus
import java.util.*

@Service
class UserService (
    private val db: UserRepository,
    private val authTokenUtil: AuthTokenUtil
) {
    fun alterNotificationSettings(settings: NotificationSettingsDtoRequest): Any {
        TODO("Not yet implemented")
    }

    // TODO: Delete if not needed anymore
    fun getDummyUser() = db.findByEmail("example.user@test.com") ?: throw IllegalArgumentException("Dummy User not found")

    fun getCurrentUser(authHeader: String): ApiResponse<UserDto> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
        return if (userId != null) {
            val user: Optional<User>? = db.findById(userId)
            if (user != null && user.isPresent) {
                ApiResponse(true, "Current user retrieved successfully", user.get().asDto(), HttpStatus.OK)
            } else {
                ApiResponse(false, "User not found", null, HttpStatus.NOT_FOUND)
            }
        } else {
            ApiResponse(false, "User ID not found in token", null, HttpStatus.BAD_REQUEST)
        }
    }

    fun deleteUser(authHeader: String): ApiResponse<String> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
        return if (userId != null) {
            db.deleteById(userId)
            ApiResponse(true, "User deleted successfully", null, HttpStatus.OK)
        } else {
            ApiResponse(false, "User ID not found in token", null, HttpStatus.BAD_REQUEST)
        }
    }
}
