package com.happyplant.backend.controller

import com.happyplant.backend.service.UserService
import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.datatransfer.user.UserDto
import com.happyplant.backend.utility.ApiResponse
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
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