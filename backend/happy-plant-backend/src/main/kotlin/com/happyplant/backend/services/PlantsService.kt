package com.happyplant.backend.services

import com.happyplant.backend.model.Plant
import org.springframework.stereotype.Service
import java.util.*

@Service
class PlantsService {
    fun getPlants(): List<Plant> {
        TODO("Not yet implemented")
    }

    fun addPlant(): Plant {
        TODO("Not yet implemented")
    }

    fun getPlant(id: Long): Plant {
        TODO("Not yet implemented")
    }

    fun alterPlant(id: Long, plant: Plant): Plant {
        TODO("Not yet implemented")
    }

    fun deletePlant(id: Long): Plant {
        TODO("Not yet implemented")
    }

    fun setAssignmentForPlant(plantId: Long, assignmentId: Long, date: Date): Any {
        TODO("Not yet implemented")
    }
}