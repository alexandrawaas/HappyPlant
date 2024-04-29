package com.happyplant.backend.controllers

import com.happyplant.backend.datatransfer.PlantDTO
import com.happyplant.backend.model.Plant
import com.happyplant.backend.services.PlantsService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@RequestMapping("plants")
class PlantsController (private val service:PlantsService) {

    @GetMapping
    @ResponseBody
    fun getPlants(@RequestParam(name = "search") search: String?): List<PlantDTO>{
        if(search == null){
            return service.getPlants()
        }
        else{
            return service.getPlantsFiltered(search)
        }
    }

    @PostMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    fun addPlant(@RequestBody newPlant: PlantDTO): PlantDTO = service.addPlant(newPlant)

    @GetMapping("/{plantId}")
    @ResponseBody
    fun getPlant(@PathVariable plantId: UUID): PlantDTO = service.getPlant(plantId)

    @PutMapping("/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun alterPlant(@PathVariable plantId: UUID, @RequestBody plant: PlantDTO): Unit = service.alterPlant(plantId, plant)

    @DeleteMapping("/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deletePlant(@PathVariable plantId: UUID): Unit = service.deletePlant(plantId)

    @PatchMapping("/{plantId}/assignments/{assignmentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun setAssignmentForPlant(@PathVariable plantId: UUID, @PathVariable assignmentId: UUID, @RequestBody date: Date): Unit
        = service.setAssignmentForPlant(plantId, assignmentId, date)
}