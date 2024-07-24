package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.CoordinatesDtoRequest
import com.happyplant.backend.datatransfer.pixel.PixelDtoRequest
import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.datatransfer.room.asDtoResponse
import com.happyplant.backend.service.RoomService
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import java.util.*

@RestController
@RequestMapping("rooms")
class RoomController (
    private val service: RoomService,
    private val authTokenUtil: AuthTokenUtil
){
    @GetMapping
    @ResponseBody
    fun getRooms(
        @RequestHeader("Authorization") authHeader: String, 
        @RequestParam(name = "search") search: String?
    ): List<RoomDtoResponse> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        val rooms = if (search.isNullOrBlank()) {
            service.getRooms(userId)
        } else {
            service.getRoomsFiltered(search, userId)
        }
        return rooms.map{ it.asDtoResponse() }
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun addRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @RequestBody newRoom: RoomDtoRequest
    ): RoomDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
        
        val room = service.addRoom(newRoom, userId)
        return room.asDtoResponse()
    }

    @PatchMapping("/{roomId}/windows")
    @ResponseStatus(HttpStatus.OK)
    fun storeWindowsInRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable("roomId") roomId: UUID, 
        @RequestBody windows: List<PixelDtoRequest>
    ): RoomDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")



        return service.storeWindowsOnRoom(roomId, windows.filter { it.isWindow }, userId)?.asDtoResponse()
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
    }
    
    @GetMapping("/{roomId}")
    @ResponseBody
    fun getRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable roomId: UUID
    ): RoomDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        return service.getRoom(roomId, userId)?.asDtoResponse()
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room not found")
    }

    @DeleteMapping("/{roomId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable roomId: UUID
    ): Unit {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")  
        
        service.deleteRoom(roomId, userId)
    }

    @GetMapping("/{roomId}/plants")
    @ResponseBody
    fun getPlantsInRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable roomId: UUID
    ): List<PlantDtoResponse> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")  

        return service.getPlantsInRoom(roomId, userId).map { it.asDtoResponse() }
    }

    @PatchMapping("/{roomId}/plants/{plantId}")
    @ResponseBody
    fun repositionPlantInRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable roomId: UUID, 
        @PathVariable plantId: UUID, 
        @RequestBody coords: CoordinatesDtoRequest
    ): RoomDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
    
        return service.repositionPlantInRoom(roomId, plantId, coords, userId).asDtoResponse()
    }

    @DeleteMapping("/{roomId}/plants/{plantId}")
    @ResponseBody
    fun removePlantFromRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable roomId: UUID, 
        @PathVariable plantId: UUID
    ): RoomDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")     
    
        return service.removePlantFromRoom(roomId, plantId, userId).asDtoResponse()
    }
}
