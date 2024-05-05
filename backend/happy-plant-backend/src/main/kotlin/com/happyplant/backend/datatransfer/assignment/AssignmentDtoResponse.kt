package com.happyplant.backend.datatransfer.assignment

import com.fasterxml.jackson.annotation.JsonProperty
import java.time.LocalDateTime
import java.util.*

data class AssignmentDtoResponse(
    @JsonProperty("id") val id: UUID,
    @JsonProperty("lastDone") val lastDone: LocalDateTime?,
    ) {
}
