package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.datatransfer.user.asDto
import com.happyplant.backend.datatransfer.user.asDtoWithNS
import com.happyplant.backend.datatransfer.user.UserWithNSDto
import com.happyplant.backend.model.User
import com.happyplant.backend.repository.*
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.server.ResponseStatusException
import java.util.*

@Service
class UserService (
    private val db: UserRepository,
    private val authTokenUtil: AuthTokenUtil,
    private val plantRepository: PlantRepository,
    private val assignmentRepository: AssignmentRepository,
    private val needsRepository: NeedsRepository,
    private val roomRepository: RoomRepository,
    private val pixelRepository: PixelRepository,
    private val imageRepository: ImageDataRepository
) {
    fun getUserById(id: UUID): User {
        return db.findById(id).get()
    }

    fun getAllUsers(): List<User> {
        return db.findAll()
    }

    fun alterNotificationSettings(settings: NotificationSettingsDtoRequest, authHeader: String): Unit {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
        if(userId != null) {
            val user: User = db.findById(userId).get()
            user.receivePushNotifications = settings.receivePushNotifications
            if (settings.pushNotificationsTime != null) {
                user.pushNotificationsTime = settings.pushNotificationsTime
            }
            if (settings.pushNotificationToken != null) {
                user.pushNotificationToken = settings.pushNotificationToken
            }
            db.save(user)
        }
        else{
            TODO("Set Error returncode")
        }
    }
    fun getDummyUser() = db.findByEmail("example.user@test.com") ?: throw IllegalArgumentException("Dummy User not found")


    fun getUser(userId: UUID): User? =
        db.findById(userId).orElse(null)

    fun getCurrentUser(authHeader: String): UserWithNSDto {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
        return userId?.let { id ->
            val user: Optional<User> = db.findById(id)
            user.orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "User not found") }.asDtoWithNS()
        } ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "User-ID not found in token")
    }

    @Transactional
    fun deleteUser(authHeader: String) {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)

        userId?.let { id ->
            val userOptional: Optional<User> = db.findById(id)
            val user = userOptional.orElseThrow { ResponseStatusException(HttpStatus.NOT_FOUND, "User not found") }

            db.deleteById(user.id)

        } ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "User-ID not found in token")
    }
}
