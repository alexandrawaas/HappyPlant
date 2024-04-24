package com.happyplant.backend.controllers

import com.happyplant.backend.model.Plant
import com.happyplant.backend.services.PlantsService
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*


@RestController
@RequestMapping("plants")
class PlantsController (private val service:PlantsService) {
    @GetMapping
    @ResponseBody
    fun getPlants(@RequestHeader(name = "search") search: String?): List<Plant>{
        if(search == null){
            return service.getPlants()
        }
        else{
            return service.getPlantsFiltered(search)
        }
    }

    @PostMapping
    @ResponseBody
    fun addPlant(@RequestBody newPlant: Plant): Plant = service.addPlant()

    @GetMapping("/{plantId}")
    @ResponseBody
    fun getPlant(@PathVariable plantId: Long): Plant = service.getPlant(plantId)

    @PutMapping("/{plantId}")
    fun alterPlant(@PathVariable plantId: Long, @RequestBody plant: Plant): Unit = service.alterPlant(plantId, plant)

    @DeleteMapping("/{plantId}")
    fun deletePlant(@PathVariable plantId: Long): Unit = service.deletePlant(plantId)

    @PatchMapping("/{plantId}/assignments/{assignmentId}")
    fun setAssignmentForPlant(@PathVariable plantId: Long, @PathVariable assignmentId: Long, @RequestBody date: Date): Unit
        = service.setAssignmentForPlant(plantId, assignmentId, date)
}