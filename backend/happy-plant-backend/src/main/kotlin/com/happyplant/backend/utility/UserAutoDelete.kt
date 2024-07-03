package com.happyplant.backend.utility

import com.happyplant.backend.service.UserService
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.LocalTime

@Component
class UserAutoDelete( private val userService: UserService) {

    @Scheduled(cron = "0 0/15 * * * *")
     fun autoDeleteUser() = runBlocking {

    }

}