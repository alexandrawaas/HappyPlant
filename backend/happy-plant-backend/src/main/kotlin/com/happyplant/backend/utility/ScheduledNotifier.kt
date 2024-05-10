package com.happyplant.backend.utility

import com.happyplant.backend.model.User
import com.happyplant.backend.service.UserService
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import java.time.LocalTime
import java.time.format.DateTimeFormatter

@Component
class ScheduledNotifier(
    private val userService: UserService,
    service: UserService,) {

    @Scheduled(cron = "0 0/5 * * * *")
    fun sendNotifications(){
        var current = LocalTime.now()

        var users = userService.getAllUsers().filter { user ->
            user.receivePushNotifications
            && user.pushNotificationsTime?.isBefore(current) ?: false
            && user.pushNotificationsTime?.isAfter(current.minusMinutes(15)) ?: false
        }

        /*
        var users = listOf(User.DUMMY_USER, User.DUMMY_USER2, User.DUMMY_USER3, User.DUMMY_USER4, User.DUMMY_USER5, User.DUMMY_USER6, User.DUMMY_USER7).filter {
                user -> user.pushNotificationsTime?.isBefore(current) ?: false
                && user.pushNotificationsTime?.isAfter(current.minusMinutes(5)) ?: false
        };
         */

        for(user in users){
            println("Notification to " + user.email + " - " + current.format(DateTimeFormatter.ISO_LOCAL_TIME) )
        }
    }

}