package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.datatransfer.user.asDto
import com.happyplant.backend.model.User
import com.happyplant.backend.repository.*
import com.happyplant.backend.utility.ApiResponse
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
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

    @Transactional
    fun deleteUser(authHeader: String): ApiResponse<String> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
        return if (userId != null) {
            val userOptional: Optional<User> = db.findById(userId)
            if (userOptional.isPresent) {
                val user: User = userOptional.get()
                user.getAllPlants().forEach { plant ->
                    plant.getAllAssignments().forEach { assignment ->
                        assignmentRepository.delete(assignment)
                    }
                    plantRepository.delete(plant)
                }
                user.getAllRooms().forEach { room ->
                    room.grid.forEach { pixel ->
                        pixelRepository.delete(pixel)
                    }
                    roomRepository.delete(room)
                }
                imageRepository.findByUserId(userId).forEach { imageRepository.delete(it) }

                db.deleteById(user.id)
                ApiResponse(true, "User deleted successfully", null, HttpStatus.OK)
            } else {
                ApiResponse(true, "User not found in DB", null, HttpStatus.NOT_FOUND)
            }
        } else {
            ApiResponse(false, "User ID not found in token", null, HttpStatus.BAD_REQUEST)
        }
    }
}
