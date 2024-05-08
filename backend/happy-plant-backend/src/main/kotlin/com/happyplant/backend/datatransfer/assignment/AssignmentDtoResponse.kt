package com.happyplant.backend.datatransfer.assignment

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.model.types.AssignmentType
import java.time.LocalDateTime
import java.util.*

data class AssignmentDtoResponse(
    @JsonProperty("id") val id: UUID,
    @JsonProperty("assignmentType") val assignmentType: AssignmentType,
    @JsonProperty("lastDone") val lastDone: LocalDateTime?,
    @JsonProperty("plantId") val plantId: UUID,
    @JsonProperty("plantName") val plantName: String
    ) {
}
