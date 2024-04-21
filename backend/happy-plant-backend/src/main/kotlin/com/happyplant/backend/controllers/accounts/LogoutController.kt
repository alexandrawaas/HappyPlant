package com.happyplant.backend.controllers.accounts

import com.happyplant.backend.datatransfer.LoginData
import com.happyplant.backend.services.AccountService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("logout")
class LogoutController (private val service: AccountService){
    @PostMapping
    fun logout() = service.logout()
}