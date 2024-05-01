package com.happyplant.backend.services

import com.happyplant.backend.datasource.RoomRepository
import com.happyplant.backend.datatransfer.CoordinatesDTORequest
import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.datatransfer.room.asDtoResponse
import com.happyplant.backend.datatransfer.room.asEntity
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import org.springframework.stereotype.Service
import java.util.*
import kotlin.jvm.optionals.getOrNull

@Service
class RoomsService (private val db: RoomRepository) {
    fun getRooms(): List<Room> =
        db.findAll().toList()

    fun getRoomsFiltered(search: String): List<Room> =
        db.findAllByName(search).toList()

    fun addRoom(newRoom: RoomDtoRequest) : Room =
        db.save(newRoom.asEntity())


    fun getRoom(roomId: UUID): Room? =
        db.findById(roomId).getOrNull()

    fun deleteRoom(roomId: UUID) : Unit =
        db.deleteById(roomId)

    fun getPlantsInRoom(roomId: UUID): List<Plant> {
        TODO("Not yet implemented")
    }

    fun addPlantToRoom(roomId: UUID, plant: PlantDTO): Unit {
        TODO("Not yet implemented")
    }

    fun repositionPlantInRoom(roomId: UUID, plantId: UUID, coords: CoordinatesDTORequest): Unit {
        TODO("Not yet implemented")
    }

    fun removePlantFromRoom(roomId: UUID, plantId: UUID): Unit {
        TODO("Not yet implemented")
    }
}