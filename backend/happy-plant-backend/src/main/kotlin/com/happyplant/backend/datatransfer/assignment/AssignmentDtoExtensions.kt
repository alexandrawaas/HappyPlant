package com.happyplant.backend.datatransfer.assignment

import com.happyplant.backend.model.Assignment
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.types.AssignmentType
import java.util.*

fun Assignment.asDtoResponse(assignmentType: AssignmentType): AssignmentDtoResponse =
        AssignmentDtoResponse(
            id = this.id,
            lastDone = this.lastDone,
            plantId = this.plant.id,
            assignmentType = assignmentType
        )

fun Assignment.asActiveAssignmentDtoResponse(plantId: UUID, plantName: String, assignmentType: AssignmentType): ActiveAssignmentDtoResponse =
    ActiveAssignmentDtoResponse(
        plantId = plantId,
        lastDone = this.lastDone,
        plantName = plantName,
        assignmentType = assignmentType
    )

fun AssignmentDtoRequest.asEntity(newPlant: Plant): Assignment =
        Assignment(
            lastDone = this.lastDone,
            plant = newPlant
        )


