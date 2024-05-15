package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.service.UserService
import org.springframework.stereotype.Service
import java.util.*
import org.springframework.web.server.ResponseStatusException
import org.springframework.http.HttpStatus

@Service
class InventoryService(
    private val db: PlantRepository,
    private val userService: UserService
) {
    fun getInventory(userId: UUID): List<PlantDtoResponse> {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")

        return db.findAllByUser(user).filter { !it.isPlaced() }.map { it.asDtoResponse() }
    }
}