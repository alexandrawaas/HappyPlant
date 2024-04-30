package com.happyplant.backend.datatransfer

import com.happyplant.backend.models.Pixel
import com.happyplant.backend.models.User
import jakarta.persistence.*
import java.util.*

class RoomDTO(
        val id: UUID,
        var name: String,
        var grid: List<PixelDTO>,
) {
}
