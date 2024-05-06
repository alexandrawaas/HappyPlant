package com.happyplant.backend.datatransfer.plant

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.assignment.AssignmentDtoRequest
import com.happyplant.backend.datatransfer.needs.NeedsDtoRequest
import com.happyplant.backend.model.types.AssignmentType
import java.util.*

data class PlantDtoRequest(
    @JsonProperty("name") var name: String,
    @JsonProperty("picturePath") var picturePath: String = "DefaultPicturePath",
    @JsonProperty("notes") var notes: String?,
    @JsonProperty("speciesId") var speciesId: UUID,
    @JsonProperty("needsId") var needs: NeedsDtoRequest?,
    @JsonProperty("assignments") var assignments: Map<AssignmentType, AssignmentDtoRequest>,
)