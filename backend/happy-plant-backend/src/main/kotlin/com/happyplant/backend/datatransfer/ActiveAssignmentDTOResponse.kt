package com.happyplant.backend.datatransfer

import com.happyplant.backend.models.types.AssignmentType
import java.util.*

data class ActiveAssignmentDTOResponse(
        val plantId: Long,
        val plantName: String,
        val assignmentType: AssignmentType,
        val lastDone: Date,
) {}