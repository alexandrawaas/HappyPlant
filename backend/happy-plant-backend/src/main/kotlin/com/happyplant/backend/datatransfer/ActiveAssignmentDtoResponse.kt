package com.happyplant.backend.datatransfer

import com.happyplant.backend.model.types.AssignmentType
import java.util.*

data class ActiveAssignmentDtoResponse(
    val plantId: Long,
    val plantName: String,
    val assignmentType: AssignmentType,
    val lastDone: Date,
) {}