package com.happyplant.backend.service

import com.happyplant.backend.repository.RoomRepository
import com.happyplant.backend.datatransfer.CoordinatesDtoRequest
import com.happyplant.backend.datatransfer.PlantDto
import com.happyplant.backend.datatransfer.pixel.PixelDto
import com.happyplant.backend.datatransfer.pixel.asEntity
import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.datatransfer.room.asDtoResponse
import com.happyplant.backend.datatransfer.room.asEntity
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.util.*
import kotlin.jvm.optionals.getOrNull

@Service
class RoomService (private val db: RoomRepository) {
    fun getRooms(): List<Room> =
        db.findAll().toList()

    fun getRoomsFiltered(search: String): List<Room> =
        db.findAllByName(search).toList()

    fun addRoom(newRoom: RoomDtoRequest): Room =
        db.save(newRoom.asEntity())

    fun getRoom(roomId: UUID): Room? =
        db.findById(roomId).getOrNull()

    fun deleteRoom(roomId: UUID): Unit =
        db.deleteById(roomId)

    fun storeWindowsOnRoom(roomId: UUID, windows: List<PixelDto>): RoomDtoResponse? {
        val room = getRoom(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        room.storeWindows(windows.map { it.asEntity(this) })
        return db.findById(roomId)
            .map { foundEntity -> db.save(room.copy(id = foundEntity.id)) }
            .map { saved -> saved.asDtoResponse() }
            .getOrNull()
    }

    fun getPlantsInRoom(roomId: UUID): List<Plant> {
        TODO("Not yet implemented")
    }

    fun addPlantToRoom(roomId: UUID, plant: PlantDto): Unit {
        TODO("Not yet implemented")
    }

    fun repositionPlantInRoom(roomId: UUID, plantId: UUID, coords: CoordinatesDtoRequest): Unit {
        TODO("Not yet implemented")
    }

    fun removePlantFromRoom(roomId: UUID, plantId: UUID): Unit {
        TODO("Not yet implemented")
    }
}