package com.happyplant.backend.datatransfer.room

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.model.types.RoomCategory
import jakarta.validation.constraints.Max
import jakarta.validation.constraints.Min
import jakarta.validation.constraints.NotBlank

data class RoomDtoRequest(
    @JsonProperty("name")
    @field:NotBlank(message = "name must not be empty")
    val name: String,

    @JsonProperty("category")
    val category: RoomCategory,

    @JsonProperty("ratioValueX")
    @field:Min(value = 1, message = "ratioValueX must be at least 1")
    @field:Max(value = 20, message = "ratioValueX must be at most 50")
    val ratioValueX: Int,

    @JsonProperty("ratioValueY")
    @field:Min(value = 1, message = "ratioValueY must be at least 1")
    @field:Max(value = 20, message = "ratioValueY must be at most 50")
    val ratioValueY: Int,
)