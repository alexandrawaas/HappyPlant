package com.happyplant.backend.controllers

import com.happyplant.backend.datatransfer.Coordinates
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Room
import com.happyplant.backend.services.PlantsService
import com.happyplant.backend.services.RoomsService
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("rooms")
class RoomsController (private val service: RoomsService){
    @GetMapping
    @ResponseBody
    fun getRooms(@RequestHeader(name = "search") search: String?): List<Room>{
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
    fun getRoom(@PathVariable roomId: Long): Room = service.getRoom(roomId)

    @DeleteMapping("/{roomId}")
    fun deleteRoom(@PathVariable roomId: Long): Unit = service.deleteRoom(roomId)

    @GetMapping("/{roomId}/plants")
    @ResponseBody
    fun getPlantsInRoom(@PathVariable roomId: Long): List<Plant> = service.getPlantsInRoom(roomId)

    @PostMapping("/{roomId}/plants")
    fun addPlantToRoom(@PathVariable roomId: Long, @RequestBody plant: Plant): Unit = service.addPlantsToRoom(roomId, plant)

    @PatchMapping("/{roomId}/plants/{plantId}")
    fun repositionPlantInRoom(@PathVariable roomId: Long, @PathVariable plantId: Long, @RequestBody coords: Coordinates): Unit
        = service.repositionPlantInRoom(roomId, plantId, coords)

    @DeleteMapping("/{roomId}/plants/{plantId}")
    fun removePlantFromRoom(@PathVariable roomId: Long, @PathVariable plantId: Long): Unit
        = service.removePlantFromRoom(roomId, plantId)
}