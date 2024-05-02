package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.PlantDto
import com.happyplant.backend.service.PlantService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@RequestMapping("plants")
class PlantController (private val service:PlantService) {

    @GetMapping
    @ResponseBody
    fun getPlants(@RequestParam(name = "search") search: String?): List<PlantDto>{
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
    fun addPlant(@RequestBody newPlant: PlantDto): PlantDto = service.addPlant(newPlant)

    @GetMapping("/{plantId}")
    @ResponseBody
    fun getPlant(@PathVariable plantId: UUID): PlantDto = service.getPlant(plantId)

    @PutMapping("/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun alterPlant(@PathVariable plantId: UUID, @RequestBody plant: PlantDto): Unit = service.alterPlant(plantId, plant)

    @DeleteMapping("/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deletePlant(@PathVariable plantId: UUID): Unit = service.deletePlant(plantId)

    @PatchMapping("/{plantId}/assignments/{assignmentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun setAssignmentForPlant(@PathVariable plantId: UUID, @PathVariable assignmentId: UUID, @RequestBody date: Date): Unit
        = service.setAssignmentForPlant(plantId, assignmentId, date)
}