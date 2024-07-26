package com.happyplant.backend.utility

import com.happyplant.backend.model.User
import kotlinx.serialization.Serializable

@Serializable
data class PushNotificationDTO(
    val to: String?,
    val title: String,
    val body: String,
    val channelId: String,
) {
    companion object{
        fun userToPushNotificationDTO(user: User): PushNotificationDTO{
            var body = "Heute gibt es nichts zu tun :)"
            val activeAssignments = user.getActiveAssignments()
            if(activeAssignments.size > 0){
                body = "Es gibt offene Aufgaben für heute. \nDeine Pflanzen brauchen dich!"
            }

            return PushNotificationDTO(user.pushNotificationToken, "HappyPlants", body, "default")
        }
    }
}