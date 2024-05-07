package com.happyplant.backend.datatransfer.pixel

import com.happyplant.backend.datatransfer.plant.PlantDtoRequest
import com.happyplant.backend.model.types.LightingType
import java.util.*

data class PixelDtoRequest (
    val id: UUID,
    var x: Int,
    var y: Int,
    var isWindow: Boolean,
    var lightingType: LightingType,
    var roomId: UUID,
    var plants: List<PlantDtoRequest>
)