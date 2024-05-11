package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.model.types.RoomCategory

data class RoomDtoRequest(
    @JsonProperty("name") val name: String,
    @JsonProperty("category") val category: RoomCategory,
    @JsonProperty("ratioValueX") val ratioValueX: Int,
    @JsonProperty("ratioValueY") val ratioValueY: Int,
)