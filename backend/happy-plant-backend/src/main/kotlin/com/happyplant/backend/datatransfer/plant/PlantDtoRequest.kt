package com.happyplant.backend.datatransfer.plant

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.assignment.AssignmentDto
import com.happyplant.backend.datatransfer.assignment.AssignmentDtoResponse
import com.happyplant.backend.datatransfer.needs.NeedsDto
import com.happyplant.backend.datatransfer.needs.NeedsDtoResponse
import com.happyplant.backend.datatransfer.room.RoomDtoResponseShort
import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import com.happyplant.backend.model.types.AssignmentType
import java.util.*

data class PlantDtoRequest(
    @JsonProperty("name") var name: String,
    @JsonProperty("picturePath") var picturePath: String = "DefaultPicturePath",
    @JsonProperty("notes") var notes: String?,
    @JsonProperty("speciesId") var speciesId: UUID,
    @JsonProperty("needsId") var needsId: UUID,
    @JsonProperty("assignments") var assignments: Map<AssignmentType, AssignmentDto>,
)