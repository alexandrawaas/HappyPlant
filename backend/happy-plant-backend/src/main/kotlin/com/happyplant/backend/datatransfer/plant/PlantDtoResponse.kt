package com.happyplant.backend.datatransfer.plant

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.assignment.AssignmentDtoResponse
import com.happyplant.backend.datatransfer.needs.NeedsDtoResponse
import com.happyplant.backend.datatransfer.room.RoomDtoResponseShort
import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import java.util.*

data class PlantDtoResponse(
    @JsonProperty("id") val id: UUID?,
    @JsonProperty("name") var name: String,
    @JsonProperty("imageId") var imageId: UUID,
    @JsonProperty("notes") var notes: String?,
    @JsonProperty("room") var room: RoomDtoResponseShort?,
    @JsonProperty("hasOptimalLightingCondition") var hasOptimalLightingCondition: Boolean,
    @JsonProperty("species") var species: SpeciesDtoResponse,
    @JsonProperty("needs") var needs: NeedsDtoResponse?,
    @JsonProperty("assignments") var assignments: List<AssignmentDtoResponse>,
)
