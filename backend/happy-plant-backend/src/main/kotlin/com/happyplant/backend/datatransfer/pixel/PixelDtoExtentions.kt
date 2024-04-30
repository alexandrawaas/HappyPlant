package com.happyplant.backend.datatransfer.pixel

import com.happyplant.backend.model.Pixel
import com.happyplant.backend.datatransfer.room.asDtoResponse

fun Pixel.asDtoResponse(): PixelDto =
    PixelDto(
        id = this.id,
        x = this.x,
        y = this.y,
        room = this.room.asDtoResponse(),
        isWindow = this.isWindow,
        lightingType = this.lightingType,
        plants = listOf(), // TODO
        // plants = this.plants.map { it.asDtoResponse() }
    )
