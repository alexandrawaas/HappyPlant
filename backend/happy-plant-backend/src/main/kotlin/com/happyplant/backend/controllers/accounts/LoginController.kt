package com.happyplant.backend.controllers.accounts

import com.happyplant.backend.datatransfer.LoginDataDTORequest
import com.happyplant.backend.services.AccountService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("login")
class LoginController (private val service: AccountService){
    @PostMapping
    fun login(@RequestBody loginData: LoginDataDTORequest) = service.login(loginData)
}