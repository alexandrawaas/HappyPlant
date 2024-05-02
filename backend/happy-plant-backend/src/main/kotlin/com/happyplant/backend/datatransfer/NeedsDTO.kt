package com.happyplant.backend.datatransfer

import com.happyplant.backend.models.types.AssignmentType
import com.happyplant.backend.models.types.LightingType
import jakarta.persistence.*
import java.util.*

class NeedsDTO(
        val id: UUID ,
        var intervals: Map<AssignmentType, Int?>,
        var lightingType: LightingType?
) {
}