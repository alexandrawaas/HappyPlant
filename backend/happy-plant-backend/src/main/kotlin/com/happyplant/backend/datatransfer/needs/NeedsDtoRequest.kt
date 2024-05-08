package com.happyplant.backend.datatransfer.needs

import com.fasterxml.jackson.annotation.JsonProperty
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import java.util.*

class NeedsDtoRequest(
    @JsonProperty("intervals") var intervals: Map<AssignmentType, Int?>?,
    @JsonProperty("lightingType") var lightingType: LightingType?
) {
}