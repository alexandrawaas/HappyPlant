package com.happyplant.backend.datatransfer.pixel

import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.model.types.LightingType
import java.util.*

class PixelDto(
    val id: UUID,
    var x: Int,
    var y: Int,
    var isWindow: Boolean,
    var lightingType: LightingType,
    var room: RoomDtoResponse,
    var plants: List<PlantDTO>
) {
}