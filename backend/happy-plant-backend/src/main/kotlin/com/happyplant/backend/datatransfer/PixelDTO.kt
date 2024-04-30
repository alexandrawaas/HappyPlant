package com.happyplant.backend.datatransfer

import com.happyplant.backend.models.Plant
import com.happyplant.backend.models.Room
import com.happyplant.backend.models.types.LightingType
import jakarta.persistence.*
import java.util.*

class PixelDTO(
        val id: UUID,
        var x: Int,
        var y: Int,
        var isWindow: Boolean,
        var lightingType: LightingType,
        var room: RoomDTO,
        var plants: List<PlantDTO>
) {
}