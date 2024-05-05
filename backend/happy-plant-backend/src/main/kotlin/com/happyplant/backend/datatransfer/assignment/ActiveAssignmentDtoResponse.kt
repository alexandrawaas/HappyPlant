package com.happyplant.backend.datatransfer.assignment

import com.happyplant.backend.model.types.AssignmentType
import java.time.LocalDateTime
import java.util.*

data class ActiveAssignmentDtoResponse(
    val plantId: UUID,
    val plantName: String,
    val assignmentType: AssignmentType,
    val lastDone: LocalDateTime?,
) {}