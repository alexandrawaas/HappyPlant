package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.pixel.PixelDto
import java.util.*

data class RoomDtoResponseShort(
        @JsonProperty("id") val id: UUID,
        @JsonProperty("name") val name: String,
) {
}