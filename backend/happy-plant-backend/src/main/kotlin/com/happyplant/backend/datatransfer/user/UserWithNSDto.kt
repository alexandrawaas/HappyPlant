package com.happyplant.backend.datatransfer.user
import java.time.LocalTime

data class UserWithNSDto(
    val id: String,
    val email: String,
    val receivePushNotifications: Boolean,
    val pushNotificationToken: String?,
    val pushNotificationsTime: LocalTime?,
)
