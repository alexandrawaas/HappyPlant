package com.happyplant.backend.controllers

import com.happyplant.backend.services.UserService
import com.happyplant.backend.datatransfer.NotificationSettingsDTORequest
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.beans.factory.annotation.Autowired
import com.happyplant.backend.datatransfer.UserDTO
import com.happyplant.backend.model.User
import com.happyplant.backend.utilities.AuthTokenUtil
import com.happyplant.backend.datasource.UserRepository
import java.util.Optional

@RestController
@RequestMapping("user")
class UserController (private val service: UserService){
    @Autowired 
    private lateinit var userRepository: UserRepository

    @Autowired
    private lateinit var authTokenUtil: AuthTokenUtil

    @PatchMapping
    fun alterNotificationSettings(@RequestBody settings: NotificationSettingsDTORequest) = service.alterNotificationSettings(settings)

    @GetMapping
    fun getCurrentUser(@RequestHeader("Authorization") authHeader: String): UserDTO? {
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