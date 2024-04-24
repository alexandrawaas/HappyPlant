package com.happyplant.backend.services

import com.happyplant.backend.datatransfer.LoginDataDTORequest
import com.happyplant.backend.datatransfer.NotificationSettingsDTORequest
import org.springframework.stereotype.Service

@Service
class AccountService {
    fun login(loginData: LoginDataDTORequest): Any {
        TODO("Not yet implemented")
    }

    fun logout(): Any {
        TODO("Not yet implemented")
    }

    fun register(loginData: LoginDataDTORequest): Any {
        TODO("Not yet implemented")
    }

    fun alterNotificationSettings(settings: NotificationSettingsDTORequest): Any {
        TODO("Not yet implemented")
    }

    fun deleteUser(): Any {
        TODO("Not yet implemented")
    }
}