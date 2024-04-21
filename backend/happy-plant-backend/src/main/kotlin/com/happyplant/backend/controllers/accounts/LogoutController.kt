package com.happyplant.backend.controllers.accounts

import com.happyplant.backend.services.AccountService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("logout")
class LogoutController (private val service: AccountService){
}