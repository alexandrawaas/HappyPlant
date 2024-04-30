package com.happyplant.backend.services

import com.happyplant.backend.datasource.RoomRepository
import com.happyplant.backend.datatransfer.CoordinatesDTORequest
import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.datatransfer.room.asDtoResponse
import com.happyplant.backend.datatransfer.room.asEntity
import org.springframework.stereotype.Service
import java.util.*
import kotlin.jvm.optionals.getOrNull

@Service
class RoomsService (private val db: RoomRepository) {
    fun getRooms(): List<RoomDtoResponse> =
        db.findAll().map { it.asDtoResponse() }

    fun getRoomsFiltered(search: String): List<RoomDtoResponse> {
        TODO("Not yet implemented")
    }

    fun addRoom(newRoom: RoomDtoRequest) =
        db.save(newRoom.asEntity()).asDtoResponse()


    fun getRoom(roomId: UUID): RoomDtoResponse? =
        db.findById(roomId).map { it.asDtoResponse() }.getOrNull()

    fun deleteRoom(roomId: UUID) : Unit =
        db.deleteById(roomId)

    fun getPlantsInRoom(roomId: UUID): List<PlantDTO> {
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