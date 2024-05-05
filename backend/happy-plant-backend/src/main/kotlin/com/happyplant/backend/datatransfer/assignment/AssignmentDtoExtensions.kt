package com.happyplant.backend.datatransfer.assignment

import com.happyplant.backend.model.Assignment
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.service.PlantService
import java.util.*

fun Assignment.asDtoResponse(): AssignmentDtoResponse =
        AssignmentDtoResponse(
            id = this.id,
            lastDone = this.lastDone,
        )

fun Assignment.asActiveAssignmentDtoResponse(plantId: UUID, plantName: String, assignmentType: AssignmentType): ActiveAssignmentDtoResponse =
    ActiveAssignmentDtoResponse(
        plantId = plantId,
        lastDone = this.lastDone,
        plantName = plantName,
        assignmentType = assignmentType
    )

    fun AssignmentDto.asEntity(plantRepository: PlantRepository): Assignment =
        Assignment(
            lastDone = this.lastDone,
            plant = PlantService(plantRepository).getPlant(this.plantId) ?: throw IllegalArgumentException("Plant not found")
        )


