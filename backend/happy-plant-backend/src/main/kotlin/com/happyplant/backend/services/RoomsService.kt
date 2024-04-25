package com.happyplant.backend.services

import com.happyplant.backend.datatransfer.CoordinatesDTORequest
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import org.springframework.stereotype.Service
import java.util.*

@Service
class RoomsService {
    fun getRooms(): List<Room> {
        TODO("Not yet implemented")
    }

    fun getRoomsFiltered(search: String): List<Room> {
        TODO("Not yet implemented")
    }

    fun addRoom(newRoom: Room): Unit {
        TODO("Not yet implemented")
    }

    fun getRoom(roomId: UUID): Room {
        TODO("Not yet implemented")
    }

    fun deleteRoom(roomId: UUID): Unit {
        TODO("Not yet implemented")
    }

    fun getPlantsInRoom(roomId: UUID): List<Plant> {
        TODO("Not yet implemented")
    }

    fun addPlantsToRoom(roomId: UUID, plant: Plant): Unit {
        TODO("Not yet implemented")
    }

    fun repositionPlantInRoom(roomId: UUID, plantId: UUID, coords: CoordinatesDTORequest): Unit {
        TODO("Not yet implemented")
    }

    fun removePlantFromRoom(roomId: UUID, plantId: UUID): Unit {
        TODO("Not yet implemented")
    }
}