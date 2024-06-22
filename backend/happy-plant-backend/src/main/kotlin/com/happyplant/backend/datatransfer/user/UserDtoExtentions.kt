package com.happyplant.backend.datatransfer.user

import com.happyplant.backend.model.User

fun User.asDto(): UserDto =
    UserDto(id.toString(), email)

fun User.asDtoWithNS(): UserWithNSDto = 
    UserWithNSDto(id.toString(), email, receivePushNotifications, pushNotificationToken, pushNotificationsTime)