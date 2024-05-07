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
            plantName = this.plant.name,
            assignmentType = assignmentType
        )

fun AssignmentDtoRequest.asEntity(newPlant: Plant): Assignment =
        Assignment(
            lastDone = this.lastDone,
            plant = newPlant
        )


