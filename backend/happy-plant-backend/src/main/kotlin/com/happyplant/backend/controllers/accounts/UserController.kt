package com.happyplant.backend.controllers.accounts

import com.happyplant.backend.datatransfer.NotificationSettings
import com.happyplant.backend.services.AccountService
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("user")
class UserController (private val service: AccountService){
    @PatchMapping
    fun alterNotificationSettings(@RequestBody settings: NotificationSettings) = service.alterNotificationSettings(settings)

    @DeleteMapping
    fun deleteUser() = service.deleteUser()
}