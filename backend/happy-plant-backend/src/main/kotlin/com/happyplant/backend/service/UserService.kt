package com.happyplant.backend.service

import com.happyplant.backend.repository.UserRepository
import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.model.User
import java.util.*

class UserService (
    private val db: UserRepository
) {
    fun getUserById(id: UUID): User {
        return db.findById(id).get()
    }

    fun alterNotificationSettings(settings: NotificationSettingsDtoRequest): Any {
        TODO("Not yet implemented")
    }

    fun deleteUser(): Any {
        TODO("Not yet implemented")
    }

}
