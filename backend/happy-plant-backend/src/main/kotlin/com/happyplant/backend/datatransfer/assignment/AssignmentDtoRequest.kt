package com.happyplant.backend.datatransfer.assignment

import com.fasterxml.jackson.annotation.JsonProperty
import java.time.LocalDateTime
import java.util.*

data class AssignmentDtoRequest(
    @JsonProperty("lastDone") val lastDone: LocalDateTime?,
    @JsonProperty("plantId") val plantId: UUID?,
    ) {
}
