package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.pixel.PixelDtoResponse
import com.happyplant.backend.model.types.RoomCategory
import java.util.*

data class RoomDtoResponse(
    @JsonProperty("id") val id: UUID,
    @JsonProperty("name") val name: String,
    @JsonProperty("category") val category: RoomCategory,
    @JsonProperty("grid") val grid: List<PixelDtoResponse>,
)