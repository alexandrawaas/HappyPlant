package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.plant.PlantDtoRequest
import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.service.PlantService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import java.time.LocalDateTime
import java.util.*


@RestController
@RequestMapping("plants")
class PlantController (private val service: PlantService) {

    @GetMapping
    @ResponseBody
    fun getPlants(@RequestParam(name = "search") search: String?): List<PlantDtoResponse> {
        return if (search == null) {
            service.getPlants().map { plant -> plant.asDtoResponse() }
        } else {
            service.getPlantsFiltered(search).map { plant -> plant.asDtoResponse() }
        }
    }

    @PostMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    fun addPlant(@RequestBody newPlant: PlantDtoRequest): PlantDtoResponse =
        service.addPlant(newPlant).asDtoResponse()

    @GetMapping("/{plantId}")
    @ResponseBody
    fun getPlant(@PathVariable plantId: UUID): PlantDtoResponse =
        service.getPlant(plantId)?.asDtoResponse()
            ?: throw ResponseStatusException( HttpStatus.NOT_FOUND, "Plant not found")

    @PutMapping("/{plantId}")
    @ResponseStatus(HttpStatus.OK)
    fun alterPlant(@PathVariable plantId: UUID, @RequestBody plant: PlantDtoRequest): PlantDtoResponse =
        service.alterPlant(plantId, plant).asDtoResponse()

    @DeleteMapping("/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deletePlant(@PathVariable plantId: UUID): Unit = service.deletePlant(plantId)

    @PatchMapping("/{plantId}/assignments/{assignmentId}")
    @ResponseStatus(HttpStatus.OK)
    fun setAssignmentForPlant(@PathVariable plantId: UUID, @PathVariable assignmentId: UUID, @RequestBody date: LocalDateTime): PlantDtoResponse
        = service.setAssignmentForPlant(plantId, assignmentId, date).asDtoResponse()
}