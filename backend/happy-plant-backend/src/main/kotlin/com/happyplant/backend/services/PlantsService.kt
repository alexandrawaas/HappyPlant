package com.happyplant.backend.services

import com.happyplant.backend.model.Plant
import org.springframework.stereotype.Service
import java.util.*

@Service
class PlantsService {
    fun getPlants(): List<Plant> {
        TODO("Not yet implemented")

    }

    fun getPlantsFiltered(search: String): List<Plant>{
        TODO("Not yet implemented")
    }

    fun addPlant(): Plant {
        TODO("Not yet implemented")
    }

    fun getPlant(id: UUID): Plant {
        TODO("Not yet implemented")
    }

    fun alterPlant(id: UUID, plant: Plant): Unit {
        TODO("Not yet implemented")
    }

    fun deletePlant(id: UUID): Unit {
        TODO("Not yet implemented")
    }

    fun setAssignmentForPlant(plantId: UUID, assignmentId: UUID, date: Date): Unit {
        TODO("Not yet implemented")
    }
}