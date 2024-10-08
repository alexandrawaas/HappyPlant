package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.datatransfer.user.UserWithNSDto
import com.happyplant.backend.repository.UserRepository
import com.happyplant.backend.service.UserService
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("user")
class UserController (private val service: UserService){
    @Autowired 
    private lateinit var userRepository: UserRepository

    @Autowired
    private lateinit var authTokenUtil: AuthTokenUtil

    @PatchMapping
    fun alterNotificationSettings(@RequestHeader("Authorization") authHeader: String, @RequestBody settings: NotificationSettingsDtoRequest) {
        service.alterNotificationSettings(settings,authHeader)
    }

    @GetMapping
    fun getCurrentUser(@RequestHeader("Authorization") authHeader: String): UserWithNSDto =
        service.getCurrentUser(authHeader)

    @DeleteMapping
    fun deleteUser(@RequestHeader("Authorization") authHeader: String) =
        service.deleteUser(authHeader)
}