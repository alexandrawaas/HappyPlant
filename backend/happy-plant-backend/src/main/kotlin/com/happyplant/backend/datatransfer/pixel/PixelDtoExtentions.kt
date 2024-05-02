package com.happyplant.backend.datatransfer.pixel

import com.happyplant.backend.model.Pixel
import com.happyplant.backend.service.RoomService

fun Pixel.asDtoResponse(): PixelDto =
    PixelDto(
        id = this.id,
        x = this.x,
        y = this.y,
        roomId = this.room.id,
        isWindow = this.isWindow,
        lightingType = this.lightingType,
        plants = listOf(), // TODO
        // plants = this.plants.map { it.asDtoResponse() }
    )

fun PixelDto.asEntity(roomService: RoomService): Pixel =
    Pixel(
        id = this.id,
        x = this.x,
        y = this.y,
        room = roomService.getRoom(this.roomId) ?: throw NoSuchElementException(),
        isWindow = this.isWindow,
        lightingType = this.lightingType,
        plants = mutableListOf(), // TODO
        // plants = this.plants.map { it.asEntity() }
    )