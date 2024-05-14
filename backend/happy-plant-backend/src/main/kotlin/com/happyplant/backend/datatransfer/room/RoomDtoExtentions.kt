package com.happyplant.backend.datatransfer.room

import com.happyplant.backend.datatransfer.pixel.asDtoResponse
import com.happyplant.backend.model.Room
import com.happyplant.backend.service.UserService

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

fun RoomDtoRequest.asEntity(userService: UserService): Room =
     Room(
        name = this.name,
        category = this.category,
        user = userService.getDummyUser(), //todo: get user from token
        ratioValueX = this.ratioValueX,
        ratioValueY = this.ratioValueY,
    )

