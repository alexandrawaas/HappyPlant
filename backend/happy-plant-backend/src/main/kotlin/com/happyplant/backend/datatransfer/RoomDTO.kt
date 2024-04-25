package com.happyplant.backend.datatransfer

import com.happyplant.backend.model.Pixel
import com.happyplant.backend.model.User
import jakarta.persistence.*
import java.util.*

class RoomDTO(
        val id: UUID,
        var name: String,
        var grid: List<PixelDTO>,
) {
}