package com.happyplant.backend.datatransfer.pixel

import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.model.types.LightingType
import java.util.*

data class PixelDto(
    val id: UUID,
    var x: Int,
    var y: Int,
    var isWindow: Boolean,
    var lightingType: LightingType,
    var roomId: UUID,
    var plants: List<PlantDTO>
) {
}