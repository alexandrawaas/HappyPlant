package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import java.util.*

data class RoomDtoResponseShort(
        @JsonProperty("id") val id: UUID,
        @JsonProperty("name") val name: String,
) {
}