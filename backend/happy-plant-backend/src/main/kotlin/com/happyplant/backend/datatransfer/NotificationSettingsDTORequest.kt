package com.happyplant.backend.datatransfer

import java.sql.Time

data class NotificationSettingsDTORequest(
        val receivePushNotifications: Boolean,
        val pushNotificationsTime: Time,
) {

}