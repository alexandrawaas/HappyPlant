package com.happyplant.backend.controllers

import com.happyplant.backend.datatransfer.CoordinatesDTORequest
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import com.happyplant.backend.services.RoomsService
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("rooms")
class RoomsController (private val service: RoomsService){
    @GetMapping
    @ResponseBody
    fun getRooms(@RequestParam(name = "search") search: String?): List<Room>{
        if(search == null){
            return service.getRooms()
        }
        else{
            return service.getRoomsFiltered(search)
        }
    }

    @PostMapping
    fun addRoom(@RequestBody newRoom: Room): Unit = service.addRoom(newRoom)

    @GetMapping("/{roomId}")
    @ResponseBody
    fun getRoom(@PathVariable roomId: UUID): Room = service.getRoom(roomId)

    @DeleteMapping("/{roomId}")
    fun deleteRoom(@PathVariable roomId: UUID): Unit = service.deleteRoom(roomId)

    @GetMapping("/{roomId}/plants")
    @ResponseBody
    fun getPlantsInRoom(@PathVariable roomId: UUID): List<Plant> = service.getPlantsInRoom(roomId)

    @PostMapping("/{roomId}/plants")
    fun addPlantToRoom(@PathVariable roomId: UUID, @RequestBody plant: Plant): Unit = service.addPlantsToRoom(roomId, plant)

    @PatchMapping("/{roomId}/plants/{plantId}")
    fun repositionPlantInRoom(@PathVariable roomId: UUID, @PathVariable plantId: UUID, @RequestBody coords: CoordinatesDTORequest): Unit
        = service.repositionPlantInRoom(roomId, plantId, coords)

    @DeleteMapping("/{roomId}/plants/{plantId}")
    fun removePlantFromRoom(@PathVariable roomId: UUID, @PathVariable plantId: UUID): Unit
        = service.removePlantFromRoom(roomId, plantId)
}