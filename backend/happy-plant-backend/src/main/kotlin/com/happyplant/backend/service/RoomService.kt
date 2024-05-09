package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.CoordinatesDtoRequest
import com.happyplant.backend.datatransfer.pixel.PixelDtoRequest
import com.happyplant.backend.datatransfer.pixel.asEntity
import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.asEntity
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import com.happyplant.backend.repository.RoomRepository
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.util.*
import kotlin.jvm.optionals.getOrNull

@Service
class RoomService (
    private val db: RoomRepository,
    private val plantService: PlantService,
    private val speciesService: SpeciesService,
) {
    fun save(room: Room) =
        db.save(room)

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

    fun storeWindowsOnRoom(roomId: UUID, windows: List<PixelDtoRequest>): Room? {
        val room = getRoom(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        room.storeWindows(windows.map { it.asEntity(this, speciesService ) })
        return db.findById(roomId)
            .map { foundEntity -> db.save(room.copy(id = foundEntity.id)) }
            .getOrNull()
    }

    fun getPlantsInRoom(roomId: UUID): List<Plant> {
        val room = getRoom(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room could not be found.")
        return room.grid.flatMap { it.plants }
    }

    fun repositionPlantInRoom(roomId: UUID, plantId: UUID, coords: CoordinatesDtoRequest): Room {
        val room = getRoom(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room could not be found.")
        val plant = plantService.getPlant(plantId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant could not be found.")

        room.placePlant(plant, coords.x, coords.y)
        save(room)

        return room
    }

    fun removePlantFromRoom(roomId: UUID, plantId: UUID): Room {
        val room = getRoom(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room could not be found.")
        val plant = plantService.getPlant(plantId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant could not be found.")
        if(!plant.isPlaced() || plant.pixel?.room?.id != room.id) {
            throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Plant is not in Room to be removed from.")
        }
        plant.removeFromRoom()
        save(room)

        return room
    }
}
