package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.assignment.AssignmentDtoResponse
import com.happyplant.backend.datatransfer.assignment.asDtoResponse
import com.happyplant.backend.repository.PlantRepository
import org.springframework.stereotype.Service

@Service
class AssignmentService(private val db: PlantRepository) {
    fun getActiveAssignments(): List<AssignmentDtoResponse> {
        // TODO: Filter by active user ID
        return db.findAll().flatMap { plant ->
            plant.getActiveAssignments().map {
                it.value.asDtoResponse(it.key)
            }
        }
    }
}
