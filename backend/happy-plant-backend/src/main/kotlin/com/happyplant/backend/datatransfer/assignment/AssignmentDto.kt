package com.happyplant.backend.datatransfer.assignment

import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import java.time.LocalDateTime
import java.util.*

data class AssignmentDto(
    val id: UUID?,
    val lastDone: LocalDateTime?,
    val plantId: UUID,
    ) {
}
