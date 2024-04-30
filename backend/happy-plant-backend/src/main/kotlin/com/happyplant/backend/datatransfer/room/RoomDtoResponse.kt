package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.pixel.PixelDto
import java.util.*

data class RoomDtoResponse(
        @JsonProperty("id") val id: UUID,
        @JsonProperty("name") val name: String,
        @JsonProperty("grid") val grid: List<PixelDto>,
) {
}