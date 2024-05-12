package com.happyplant.backend.utility

import com.happyplant.backend.model.User
import com.happyplant.backend.service.UserService
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import java.time.LocalTime
import java.time.format.DateTimeFormatter
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.*

@Component
class ScheduledNotifier( private val userService: UserService) {

    @Scheduled(cron = "0 0/1 * * * *")
     fun sendNotifications() = runBlocking {
        var current = LocalTime.now()
        println("Scheduler called " + current.format(DateTimeFormatter.ISO_LOCAL_TIME))


        /*
        var pushNotificationDTOs = userService.getAllUsers().filter { user ->
            user.receivePushNotifications
                    && user.pushNotificationsTime?.isBefore(current) ?: false
                    && user.pushNotificationsTime?.isAfter(current.minusMinutes(15)) ?: false
        }.map { PushNotificationDTO::userToPushNotificationDTO }.toList()
         */

        var pushNotificationDTOs = listOf(User.DUMMY_USER, User.DUMMY_USER2, User.DUMMY_USER3, User.DUMMY_USER4, User.DUMMY_USER5, User.DUMMY_USER6, User.DUMMY_USER7).map { PushNotificationDTO::userToPushNotificationDTO }.toList()

        val sizedArrays: List<Array<User>> = emptyList()

        if(pushNotificationDTOs.size > 100){
            for(i in 0..(pushNotificationDTOs.size)/100){
                sizedArrays.plus(pushNotificationDTOs.filterIndexed { index, user -> index >= i*100 && index < i*100}.toTypedArray() )
            }
        }
        else{
            sizedArrays.plus(pushNotificationDTOs.toTypedArray())
        }

        val client = HttpClient(CIO)
        val httpResponses: List<HttpResponse> = emptyList()

        for (arr in sizedArrays) {
            println("api call" + arr)
            launch{
                sendRequest(client, arr)
            }
        }

        /*
        var users = listOf(User.DUMMY_USER, User.DUMMY_USER2, User.DUMMY_USER3, User.DUMMY_USER4, User.DUMMY_USER5, User.DUMMY_USER6, User.DUMMY_USER7);
        */

        client.close();
    }

    suspend fun sendRequest(client: HttpClient, arr: Array<User>): List<HttpResponse>{
        val httpResponses: List<HttpResponse> = emptyList()

        httpResponses.plus(
            client.post("https://exp.host/--/api/v2/push/send") {
                contentType(ContentType.Application.Json)
                setBody(arr)
            }
        )

        return httpResponses
    }

}