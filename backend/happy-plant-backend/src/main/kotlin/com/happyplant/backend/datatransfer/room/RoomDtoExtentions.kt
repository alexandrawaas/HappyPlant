package com.happyplant.backend.datatransfer.room

import com.happyplant.backend.datatransfer.pixel.asDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.model.Room
import com.happyplant.backend.model.User

fun Room.asDtoResponse(): RoomDtoResponse =
    RoomDtoResponse(
        id = this.id,
        name = this.name,
        category = this.category,
        x = sizeX,
        y = sizeY,
        numberOfPlants = this.grid.sumOf { it.plants.size },
        numberOfAssignments = this.grid.sumOf { it.plants.map { p -> p.assignments.size }.count() },
        numberOfWarnings = this.grid.sumOf { r -> r.plants.map { it.asDtoResponse() }.count { !it.hasOptimalLightingCondition } },
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

