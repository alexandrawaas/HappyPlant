package com.happyplant.backend.datatransfer.pixel

import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.datatransfer.plant.asEntity
import com.happyplant.backend.model.Pixel
import com.happyplant.backend.service.RoomService
import com.happyplant.backend.service.SpeciesService
import com.happyplant.backend.model.User

fun Pixel.asDtoResponse(): PixelDtoResponse =
    PixelDtoResponse(
        id = this.id,
        x = this.x,
        y = this.y,
        roomId = this.room.id,
        isWindow = this.isWindow,
        lightingType = this.lightingType,
        plants = this.plants.map { it.asDtoResponse() }
    )

fun PixelDtoRequest.asEntity(roomService: RoomService, speciesService: SpeciesService, user: User): Pixel =
    Pixel(
        id = this.id,
        x = this.x,
        y = this.y,
        room = roomService.getRoom(this.roomId, user.id) ?: throw NoSuchElementException(),
        isWindow = this.isWindow,
        lightingType = this.lightingType,
        plants = this.plants.map { it.asEntity(speciesService, user) }.toMutableList()
    )
