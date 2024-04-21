package com.happyplant.backend.controllers.accounts

import com.happyplant.backend.services.AccountService
import com.happyplant.backend.services.PlantsService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("login")
class LoginController (private val service: AccountService){
}