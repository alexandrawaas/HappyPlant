package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.PlantDto
import org.springframework.stereotype.Service
import java.util.*

@Service
class PlantService {
    fun getPlants(): List<PlantDto> {
        TODO("Not yet implemented")

    }

    fun getPlantsFiltered(search: String): List<PlantDto>{
        TODO("Not yet implemented")
    }

    fun addPlant(newPlant: PlantDto): PlantDto {
        TODO("Not yet implemented")
    }

    fun getPlant(id: UUID): PlantDto {
        TODO("Not yet implemented")
    }

    fun alterPlant(id: UUID, plant: PlantDto): Unit {
        TODO("Not yet implemented")
    }

    fun deletePlant(id: UUID): Unit {
        TODO("Not yet implemented")
    }

    fun setAssignmentForPlant(plantId: UUID, assignmentId: UUID, date: Date): Unit {
        TODO("Not yet implemented")
    }
}