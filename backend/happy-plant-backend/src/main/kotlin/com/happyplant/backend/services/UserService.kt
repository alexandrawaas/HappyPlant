package com.happyplant.backend.services

import com.happyplant.backend.datasource.UserRepository
import com.happyplant.backend.datatransfer.NotificationSettingsDTORequest
import com.happyplant.backend.model.User
import java.util.*

class UserService (
    private val db: UserRepository
) {
    fun getUserById(id: UUID): User {
        return db.findById(id).get()
    }

    fun alterNotificationSettings(settings: NotificationSettingsDTORequest): Any {
        TODO("Not yet implemented")
    }

    fun deleteUser(): Any {
        TODO("Not yet implemented")
    }

}
