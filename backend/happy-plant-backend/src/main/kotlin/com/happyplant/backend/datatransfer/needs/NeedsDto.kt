package com.happyplant.backend.datatransfer.needs

import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import java.util.*

class NeedsDto(
    val id: UUID,
    var intervals: Map<AssignmentType, Int?>,
    var lightingType: LightingType?
) {
}