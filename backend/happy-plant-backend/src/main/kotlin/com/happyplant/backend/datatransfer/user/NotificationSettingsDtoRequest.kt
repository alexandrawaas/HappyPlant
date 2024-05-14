package com.happyplant.backend.datatransfer.user

import java.time.LocalTime

data class NotificationSettingsDtoRequest(
        val receivePushNotifications: Boolean,
        val pushNotificationToken: String?,
        val pushNotificationsTime: LocalTime,
) {

}