package com.happyplant.backend.datatransfer.needs

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType

data class NeedsDtoResponse (
    @JsonProperty("lightingType") val lightingType: LightingType?,
    @JsonProperty("intervals") val intervals: Map<AssignmentType, Int?>
)
