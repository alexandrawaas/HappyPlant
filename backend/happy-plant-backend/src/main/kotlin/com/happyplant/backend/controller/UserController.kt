package com.happyplant.backend.controller

import com.happyplant.backend.service.UserService
import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.utility.ApiResponse
import org.springframework.web.bind.annotation.*
import org.springframework.beans.factory.annotation.Autowired
import java.util.Optional

@RestController
@RequestMapping("user")
class UserController (private val service: UserService){

    @PatchMapping
    fun alterNotificationSettings(@RequestBody settings: NotificationSettingsDtoRequest) = service.alterNotificationSettings(settings)

    @GetMapping
    fun getCurrentUser(@RequestHeader("Authorization") authHeader: String): ApiResponse<UserDto> {
        return service.getCurrentUser(authHeader)
    }

    @DeleteMapping
    fun deleteUser(@RequestHeader("Authorization") authHeader: String): ApiResponse<String> {
        return service.deleteUser(authHeader)
    }
}