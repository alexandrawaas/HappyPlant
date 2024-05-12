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
import java.util.stream.Stream
import kotlin.reflect.KFunction1
import kotlin.streams.toList

@Component
class ScheduledNotifier( private val userService: UserService) {

    @Scheduled(cron = "0 0/15 * * * *")
     fun sendNotifications() = runBlocking {
        var current = LocalTime.now()


        var pushNotificationDTOs = userService.getAllUsers().filter { user ->
            user.receivePushNotifications
                    && user.pushNotificationsTime?.isBefore(current) ?: false
                    && user.pushNotificationsTime?.isAfter(current.minusMinutes(15)) ?: false
        }.stream().map{ user -> PushNotificationDTO.userToPushNotificationDTO(user) }.toList()

        //for testing
        //var pushNotificationDTOs: MutableList<PushNotificationDTO> = listOf(User.DUMMY_USER, User.DUMMY_USER2, User.DUMMY_USER3, User.DUMMY_USER4, User.DUMMY_USER5, User.DUMMY_USER6, User.DUMMY_USER7).stream().map{ user -> PushNotificationDTO.userToPushNotificationDTO(user) }.toList()

        val sizedArrays: MutableList<Array<PushNotificationDTO>> = ArrayList()

        if(pushNotificationDTOs.size > 100){
            for(i in 0..(pushNotificationDTOs.size)/100){
                sizedArrays.add(pushNotificationDTOs.filterIndexed { index, user -> index >= i*100 && index < i*100}.toTypedArray() )
            }
        }
        else{
            sizedArrays.add(pushNotificationDTOs.toTypedArray())
        }

        val client = HttpClient(CIO)

        for (arr in sizedArrays) {
            //println("api call 2 - size: " + arr.size + " test: " + arr.get(0).title + " - " + arr.get(0).body )

            launch{
                sendRequest(client, arr)
            }

        }

        client.close();
    }

    suspend fun sendRequest(client: HttpClient, arr: Array<PushNotificationDTO>): List<HttpResponse>{
        val httpResponses: MutableList<HttpResponse> = ArrayList()

        httpResponses.add(
            client.post("https://exp.host/--/api/v2/push/send") {
                contentType(ContentType.Application.Json)
                setBody(arr)
            }
        )

        return httpResponses
    }

}