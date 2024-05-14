package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.model.types.RoomCategory
import java.util.*

data class RoomDtoResponseShort(
        @JsonProperty("id") val id: UUID,
        @JsonProperty("name") val name: String,
        @JsonProperty("category") val category: RoomCategory,
)