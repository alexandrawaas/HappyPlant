package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.CoordinatesDtoRequest
import com.happyplant.backend.datatransfer.pixel.PixelDtoRequest
import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.pixel.PixelDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.datatransfer.room.asDtoResponse
import com.happyplant.backend.service.RoomService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import java.util.*

@RestController
@RequestMapping("rooms")
class RoomController (private val service: RoomService){
    @GetMapping
    @ResponseBody
    fun getRooms(@RequestParam(name = "search") search: String?): List<RoomDtoResponse> =
        if (search.isNullOrBlank())
            service.getRooms().map { it.asDtoResponse() }
        else
            service.getRoomsFiltered(search).map { it.asDtoResponse() }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun addRoom(@RequestBody newRoom: RoomDtoRequest): RoomDtoResponse =
        service.addRoom(newRoom).asDtoResponse()

    @PutMapping("/{roomId}/windows")
    @ResponseStatus(HttpStatus.OK)
    fun storeWindowsInRoom(@PathVariable("roomId") roomId: UUID, @RequestBody windows: List<PixelDtoRequest>): RoomDtoResponse =
        service.storeWindowsOnRoom(roomId, windows) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
    
    @GetMapping("/{roomId}")
    @ResponseBody
    fun getRoom(@PathVariable roomId: UUID): RoomDtoResponse =
        service.getRoom(roomId)?.asDtoResponse()
            ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Room not found")

    @DeleteMapping("/{roomId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteRoom(@PathVariable roomId: UUID): Unit =
        service.deleteRoom(roomId)

    @GetMapping("/{roomId}/plants")
    @ResponseBody
    fun getPlantsInRoom(@PathVariable roomId: UUID): List<PlantDtoResponse> =
         service.getPlantsInRoom(roomId).map { it.asDtoResponse() }

    @PatchMapping("/{roomId}/plants/{plantId}")
    @ResponseBody
    fun repositionPlantInRoom(@PathVariable roomId: UUID, @PathVariable plantId: UUID, @RequestBody coords: CoordinatesDtoRequest): Boolean =
        service.repositionPlantInRoom(roomId, plantId, coords)

    @DeleteMapping("/{roomId}/plants/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun removePlantFromRoom(@PathVariable roomId: UUID, @PathVariable plantId: UUID): Unit =
        service.removePlantFromRoom(roomId, plantId)
}
