package com.happyplant.backend.datatransfer.plant

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.needs.NeedsDtoRequest
import java.util.*

data class PlantDtoRequest(
    @JsonProperty("name") var name: String,
    @JsonProperty("notes") var notes: String?,
    @JsonProperty("speciesId") var speciesId: UUID,
    @JsonProperty("needs") var needs: NeedsDtoRequest?
)