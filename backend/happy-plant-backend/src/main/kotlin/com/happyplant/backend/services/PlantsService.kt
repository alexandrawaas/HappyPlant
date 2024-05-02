package com.happyplant.backend.services

import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.model.Plant
import org.springframework.stereotype.Service
import java.util.*

@Service
class PlantsService {
    fun getPlants(): List<PlantDTO> {
        TODO("Not yet implemented")

    }

    fun getPlantsFiltered(search: String): List<PlantDTO>{
        TODO("Not yet implemented")
    }

    fun addPlant(newPlant: PlantDTO): PlantDTO {
        TODO("Not yet implemented")
    }

    fun getPlant(id: UUID): PlantDTO {
        TODO("Not yet implemented")
    }

    fun alterPlant(id: UUID, plant: PlantDTO): Unit {
        TODO("Not yet implemented")
    }

    fun deletePlant(id: UUID): Unit {
        TODO("Not yet implemented")
    }

    fun setAssignmentForPlant(plantId: UUID, assignmentId: UUID, date: Date): Unit {
        TODO("Not yet implemented")
    }
}