package com.happyplant.backend.datatransfer.room

import com.happyplant.backend.datatransfer.pixel.asDtoResponse
import com.happyplant.backend.model.Room
import com.happyplant.backend.model.User

fun Room.asDtoResponse(): RoomDtoResponse =
    RoomDtoResponse(
        id = this.id,
        name = this.name,
        grid = this.grid.map { it.asDtoResponse() },
    )

fun Room.asDtoResponseShort(): RoomDtoResponseShort =
    RoomDtoResponseShort(
        id = this.id,
        name = this.name,
    )

fun RoomDtoRequest.asEntity(): Room =
    Room(
        name = this.name,
        user = User.DUMMY_USER, //todo: get user from token
        ratioValueX = this.ratioValueX,
        ratioValueY = this.ratioValueY,
    )