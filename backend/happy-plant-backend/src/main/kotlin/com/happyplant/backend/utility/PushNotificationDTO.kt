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
            var body = "No Assignments for today :)"
            val activeAssignments = user.getActiveAssignments()
            if(activeAssignments.size > 0){
                body = "You have open Assignments for today. \nYour plants need you!"
            }

            return PushNotificationDTO(user.pushNotificationToken, "Make your Plants Happy!", body, "default")
        }
    }
}