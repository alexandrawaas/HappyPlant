package com.happyplant.backend.services

import com.happyplant.backend.datatransfer.CoordinatesDTORequest
import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.datatransfer.RoomDTO
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import org.springframework.stereotype.Service
import java.util.*

@Service
class RoomsService {
    fun getRooms(): List<RoomDTO> {
        TODO("Not yet implemented")
    }

    fun getRoomsFiltered(search: String): List<RoomDTO> {
        TODO("Not yet implemented")
    }

    fun addRoom(newRoom: RoomDTO): Unit {
        TODO("Not yet implemented")
    }

    fun getRoom(roomId: UUID): RoomDTO {
        TODO("Not yet implemented")
    }

    fun deleteRoom(roomId: UUID): Unit {
        TODO("Not yet implemented")
    }

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