package com.happyplant.backend.utility

import com.happyplant.backend.service.UserService
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.LocalTime

@Component
@Transactional
class ScheduledNotifier( private val userService: UserService) {

    @Scheduled(cron = "0 0/15 * * * *")
     fun sendNotifications() = runBlocking {
        var current = LocalTime.now()

        //userService.getAllUsers().forEach{user -> println(user.email + " - " + user.receivePushNotifications + " - " + user.pushNotificationToken)}

        var pushNotificationDTOs = userService.getAllUsers().filter { user ->
            user.receivePushNotifications
                    && user.pushNotificationsTime?.isBefore(current) ?: false
                    && user.pushNotificationsTime?.isAfter(current.minusMinutes(15)) ?: false
        }.stream().map{ user -> PushNotificationDTO.userToPushNotificationDTO(user) }.toList()


        val sizedArrays: MutableList<Array<PushNotificationDTO>> = ArrayList()
        //println(pushNotificationDTOs.size)

        if(pushNotificationDTOs.size > 100){
            for(i in 0..(pushNotificationDTOs.size)/100){
                sizedArrays.add(pushNotificationDTOs.filterIndexed { index, user -> index >= i*100 && index < i*100}.toTypedArray() )
            }
        }
        else{
            sizedArrays.add(pushNotificationDTOs.toTypedArray())
        }

        val client = HttpClient.newBuilder().build();

        for (arr in sizedArrays) {
            var json: String = Json.encodeToString(arr);
            val request = HttpRequest.newBuilder()
                .uri(URI.create("https://exp.host/--/api/v2/push/send"))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(json))
                .build();
            val response = client.send(request, HttpResponse.BodyHandlers.ofString());
        }
    }

}