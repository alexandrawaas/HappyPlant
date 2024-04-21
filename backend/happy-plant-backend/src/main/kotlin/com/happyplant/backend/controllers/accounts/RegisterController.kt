package com.happyplant.backend.controllers.accounts

import com.happyplant.backend.datatransfer.LoginData
import com.happyplant.backend.services.AccountService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("register")
class RegisterController (private val service: AccountService){
    @PostMapping
    fun register(@RequestBody loginData: LoginData) = service.register(loginData)
}