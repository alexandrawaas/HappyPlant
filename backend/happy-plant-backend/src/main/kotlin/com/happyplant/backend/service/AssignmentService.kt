package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.assignment.ActiveAssignmentDtoResponse
import com.happyplant.backend.datatransfer.assignment.asActiveAssignmentDtoResponse
import com.happyplant.backend.model.Assignment
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.repository.AssignmentRepository
import com.happyplant.backend.repository.PlantRepository
import org.springframework.stereotype.Service

@Service
class AssignmentService(private val db: PlantRepository) {
    fun getActiveAssignments(): List<ActiveAssignmentDtoResponse> {
        val plants = db.findAll()
        // TODO: Filter by active user ID
        val activeAssignments = mutableListOf<ActiveAssignmentDtoResponse>()
        plants.forEach { plant -> activeAssignments.addAll(plant.getActiveAssignments()
            .map { it.asActiveAssignmentDtoResponse(plant.id, plant.name, AssignmentType.WATERING) }) }
        // TODO: Replace dummy assignment type with actual assignment type of the assignment
        return activeAssignments
    }
}
