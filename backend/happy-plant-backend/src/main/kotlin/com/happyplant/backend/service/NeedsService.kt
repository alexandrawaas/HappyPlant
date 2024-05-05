package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.assignment.ActiveAssignmentDtoResponse
import com.happyplant.backend.datatransfer.assignment.asActiveAssignmentDtoResponse
import com.happyplant.backend.datatransfer.needs.NeedsDtoResponse
import com.happyplant.backend.datatransfer.needs.asDtoResponse
import com.happyplant.backend.model.Assignment
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.repository.AssignmentRepository
import com.happyplant.backend.repository.NeedsRepository
import com.happyplant.backend.repository.PlantRepository
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class NeedsService(private val db: NeedsRepository) {
    fun getNeeds(needsId: UUID): NeedsDtoResponse =
        db.findById(needsId).map { it.asDtoResponse() }
            .orElseThrow { IllegalArgumentException("Needs not found") }
}
