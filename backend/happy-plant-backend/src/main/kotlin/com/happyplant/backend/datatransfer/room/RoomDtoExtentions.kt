package com.happyplant.backend.datatransfer.room

import com.happyplant.backend.datatransfer.pixel.asDtoResponse
import com.happyplant.backend.model.Room
import com.happyplant.backend.model.User

fun Room.asDtoResponse(): RoomDtoResponse =
    RoomDtoResponse(
        id = this.id,
        name = this.name,
        category = this.category,
        grid = this.grid.map { it.asDtoResponse() },
    )

fun Room.asDtoResponseShort(): RoomDtoResponseShort =
    RoomDtoResponseShort(
        id = this.id,
        name = this.name,
        category = this.category
    )

fun RoomDtoRequest.asEntity(user: User): Room =
     Room(
        name = this.name,
        category = this.category,
        user = user,
        ratioValueX = this.ratioValueX,
        ratioValueY = this.ratioValueY,
    )

