package com.happyplant.backend.datatransfer.assignment

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.model.types.AssignmentType
import java.time.LocalDateTime
import java.util.*

data class AssignmentDtoRequest(
    @JsonProperty("lastDone") val lastDone: LocalDateTime?,
    @JsonProperty("assignmentType") val assignmentType: AssignmentType,
    ) {
}
