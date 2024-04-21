package com.happyplant.backend.datatransfer

import java.sql.Time

data class NotificationSettings(
        val receivePushNotifications: Boolean,
        val pushNotificationsTime: Time,
) {

}