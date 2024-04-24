package com.happyplant.backend.services

import com.happyplant.backend.datatransfer.CoordinatesDTORequest
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import org.springframework.stereotype.Service

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

    fun getRoom(roomId: Long): Room {
        TODO("Not yet implemented")
    }

    fun deleteRoom(roomId: Long): Unit {
        TODO("Not yet implemented")
    }

    fun getPlantsInRoom(roomId: Long): List<Plant> {
        TODO("Not yet implemented")
    }

    fun addPlantsToRoom(roomId: Long, plant: Plant): Unit {
        TODO("Not yet implemented")
    }

    fun repositionPlantInRoom(roomId: Long, plantId: Long, coords: CoordinatesDTORequest): Unit {
        TODO("Not yet implemented")
    }

    fun removePlantFromRoom(roomId: Long, plantId: Long): Unit {
        TODO("Not yet implemented")
    }
}