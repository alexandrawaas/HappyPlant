package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty

data class RoomDtoRequest(
    @JsonProperty("name") val name: String,
    @JsonProperty("ratioValueX") val ratioValueX: Int,
    @JsonProperty("ratioValueY") val ratioValueY: Int,
)