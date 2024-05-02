package com.happyplant.backend.datatransfer.user

import java.sql.Time

data class NotificationSettingsDtoRequest(
        val receivePushNotifications: Boolean,
        val pushNotificationsTime: Time,
) {

}