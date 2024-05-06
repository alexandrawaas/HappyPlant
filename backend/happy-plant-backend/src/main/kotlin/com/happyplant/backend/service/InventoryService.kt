package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.repository.PlantRepository
import org.springframework.stereotype.Service

@Service
class InventoryService(private val db: PlantRepository) {
    fun getInventory(): List<PlantDtoResponse> {
        val placedPlants = db.findAll().filter { !it.isPlaced() }    // TODO: Filter by active user ID
        return placedPlants.map { it.asDtoResponse() }
    }

}