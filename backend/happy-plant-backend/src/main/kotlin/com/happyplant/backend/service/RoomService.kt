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
    private val userService: UserService
) {
    fun save(room: Room) =
        db.save(room)

    fun getRooms(userId: UUID): List<Room> {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        return db.findAllByUser(user).toList()
    }

    fun getRoomsFiltered(search: String, userId: UUID): List<Room> {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        return db.findAllByNameContainingIgnoreCaseAndUser(search, user).toList()
    }

    fun addRoom(newRoom: RoomDtoRequest, userId: UUID): Room {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        return db.save(newRoom.asEntity(user))
    }

    fun getRoom(roomId: UUID, userId: UUID): Room? {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val room = getRoomFromDb(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room not found")
        if (user.id == room.user.id) {
            return room
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission for this room")
        }
    }

    fun deleteRoom(roomId: UUID, userId: UUID): Unit {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val room = getRoomFromDb(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room not found")

        if (user.id == room.user.id) {
            val plantsInRoom = getPlantsInRoom(roomId, userId)
            for (plant in plantsInRoom) {
                removePlantFromRoom(roomId, plant.id, userId)
            }
            db.deleteById(roomId)
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to delete this room")
        }
    }

    fun storeWindowsOnRoom(roomId: UUID, windows: List<PixelDtoRequest>, userId: UUID): Room? {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val room = getRoomFromDb(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)

        if (user.id == room.user.id) {
            room.storeWindows(windows.map { it.asEntity(this, speciesService, user ) })
            return db.findById(roomId)
                .map { foundEntity -> db.save(room.copy(id = foundEntity.id)) }
                .getOrNull()
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to place windows for this room")   
        }
    }

    fun getPlantsInRoom(roomId: UUID, userId: UUID): List<Plant> {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val room = getRoomFromDb(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room could not be found.")

        return if (user.id == room.user.id) {
            room.grid.flatMap { it.plants }
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to get plants for this room")    
        }
    }

    fun repositionPlantInRoom(roomId: UUID, plantId: UUID, coords: CoordinatesDtoRequest, userId: UUID): Room {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val room = getRoomFromDb(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room could not be found.")
        val plant = plantService.getPlant(plantId, userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant could not be found.")

        if (user.id == room.user.id) {
            room.placePlant(plant, coords.x, coords.y)
            save(room)
    
            return room
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to reposition plants in this room")              
        }
    }

    fun removePlantFromRoom(roomId: UUID, plantId: UUID, userId: UUID): Room {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val room = getRoomFromDb(roomId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room could not be found.")
        val plant = plantService.getPlant(plantId, userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant could not be found.")

        if (user.id == room.user.id) {
            if(!plant.isPlaced() || plant.pixel?.room?.id != room.id) {
                throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Plant is not in Room to be removed from.")
            }
            plant.removeFromRoom()
            save(room)
    
            return room
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to remove plants from this room")       
        }
    }

    private fun getRoomFromDb(roomId: UUID): Room? = 
        db.findById(roomId).getOrNull()
}
