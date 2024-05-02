package com.happyplant.backend.controller

import com.happyplant.backend.service.UserService
import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.beans.factory.annotation.Autowired
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.datatransfer.user.asDto
import com.happyplant.backend.model.User
import com.happyplant.backend.utility.AuthTokenUtil
import com.happyplant.backend.repository.UserRepository
import java.util.Optional

@RestController
@RequestMapping("user")
class UserController (private val service: UserService){
    @Autowired 
    private lateinit var userRepository: UserRepository

    @Autowired
    private lateinit var authTokenUtil: AuthTokenUtil

    @PatchMapping
    fun alterNotificationSettings(@RequestBody settings: NotificationSettingsDtoRequest) = service.alterNotificationSettings(settings)

    @GetMapping
    fun getCurrentUser(@RequestHeader("Authorization") authHeader: String): UserDto? {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
        return if (userId != null) {
            val user: Optional<User>? = userRepository.findById(userId)
            user?.orElse(null)?.asDto()
        } else {
            null
        }
    }

    @DeleteMapping
    fun deleteUser() = service.deleteUser()
}