package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.pixel.PixelDtoResponse
import com.happyplant.backend.model.types.RoomCategory
import java.util.*

data class RoomDtoResponse(
    @JsonProperty("id") val id: UUID,
    @JsonProperty("name") val name: String,
    @JsonProperty("category") val category: RoomCategory,
    @JsonProperty("x") val x: Int,
    @JsonProperty("y") val y: Int,
    @JsonProperty("grid") val grid: List<PixelDtoResponse>,
    @JsonProperty("numberOfPlants") val numberOfPlants: Int = 0,
    @JsonProperty("numberOfWarnings") val numberOfWarnings: Int = 0,
    @JsonProperty("numberOfAssignments") val numberOfAssignments: Int = 0,
)