package com.happyplant.backend.datatransfer.species;

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.datatransfer.needs.NeedsDtoRequest
import com.happyplant.backend.datatransfer.needs.NeedsDtoResponse
import com.happyplant.backend.model.Needs
import java.util.UUID

data class SpeciesDtoResponse(
    @JsonProperty("id") val id: UUID,
    @JsonProperty("name") val name: String,
    @JsonProperty("latinName") val latinName: String,
    @JsonProperty("picturePath") val picturePath: String,
    @JsonProperty("family") val family: String,
    @JsonProperty("description") val description: String,
    @JsonProperty("needs") val needs: NeedsDtoResponse,
)
