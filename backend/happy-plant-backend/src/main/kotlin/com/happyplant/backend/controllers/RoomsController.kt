package com.happyplant.backend.controllers

import com.happyplant.backend.datatransfer.CoordinatesDTORequest
import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.services.RoomsService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("rooms")
class RoomsController (private val service: RoomsService){
    @GetMapping
    @ResponseBody
    fun getRooms(@RequestParam(name = "search") search: String?): List<RoomDtoResponse>{
        if(search == null){
            return service.getRooms()
        }
        else{
            return service.getRoomsFiltered(search)
        }
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)

    @GetMapping("/{roomId}")
    @ResponseBody

    @DeleteMapping("/{roomId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteRoom(@PathVariable roomId: UUID): Unit = service.deleteRoom(roomId)

    @GetMapping("/{roomId}/plants")
    @ResponseBody
    fun getPlantsInRoom(@PathVariable roomId: UUID): List<PlantDTO> = service.getPlantsInRoom(roomId)

    @PostMapping("/{roomId}/plants")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun addPlantToRoom(@PathVariable roomId: UUID, @RequestBody plant: PlantDTO): Unit = service.addPlantToRoom(roomId, plant)
    //Hier vieleicht ID von Pflanze wenn diese bereits erstellt

    @PatchMapping("/{roomId}/plants/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun repositionPlantInRoom(@PathVariable roomId: UUID, @PathVariable plantId: UUID, @RequestBody coords: CoordinatesDTORequest): Unit
        = service.repositionPlantInRoom(roomId, plantId, coords)

    @DeleteMapping("/{roomId}/plants/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun removePlantFromRoom(@PathVariable roomId: UUID, @PathVariable plantId: UUID): Unit
        = service.removePlantFromRoom(roomId, plantId)
}
