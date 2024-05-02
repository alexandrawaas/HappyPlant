package com.happyplant.backend.service

import com.happyplant.backend.repository.UserRepository
import com.happyplant.backend.datatransfer.user.NotificationSettingsDtoRequest
import com.happyplant.backend.model.User
import org.springframework.stereotype.Service
import java.util.*

@Service
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
