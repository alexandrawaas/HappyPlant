package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.assignment.AssignmentDtoRequest
import com.happyplant.backend.datatransfer.plant.PlantDtoRequest
import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.service.PlantService
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.hateoas.EntityModel
import org.springframework.hateoas.server.mvc.linkTo
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import java.util.*


@RestController
@RequestMapping("plants")
class PlantController (
    private val service: PlantService,
    private val authTokenUtil: AuthTokenUtil
) {

    @GetMapping
    @ResponseBody
    fun getPlants(
        @RequestHeader("Authorization") authHeader: String, 
        @RequestParam(name = "search") search: String?
    ): List<PlantDtoResponse> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
    
        val plants = if (search.isNullOrBlank()) {
            service.getPlants(userId)
        } else {
            service.getPlantsFiltered(search, userId)
        }
        return plants.map{ it.asDtoResponse() }
    }

    @PostMapping
    @ResponseBody
    fun addPlant(
        @RequestHeader("Authorization") authHeader: String, 
        @RequestBody newPlant: PlantDtoRequest
    ): PlantDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        val plant = service.addPlant(newPlant, userId)
        return plant.asDtoResponse()
    }

    @GetMapping("/{plantId}")
    @ResponseBody
    fun getPlant(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable plantId: UUID
    ): EntityModel<PlantDtoResponse> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token") 
        
        val plantDtoResponse = service.getPlant(plantId, userId)?.asDtoResponse()
            ?: throw ResponseStatusException( HttpStatus.NOT_FOUND, "Plant not found")

        return EntityModel.of(
            plantDtoResponse,
            linkTo<ImageController> {getImage(null, plantDtoResponse.imageId)}.withRel { "image" }
        )
    }

    @PutMapping("/{plantId}")
    @ResponseStatus(HttpStatus.OK)
    fun alterPlant(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable plantId: UUID, 
        @RequestBody plant: PlantDtoRequest
    ): PlantDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
        ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
        
        return service.alterPlant(plantId, plant, userId).asDtoResponse()
    }

    @DeleteMapping("/{plantId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteRoom(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable plantId: UUID
    ): Unit {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")  
            
        service.deletePlant(plantId, userId)
    }

    @PatchMapping("/{plantId}/assignments")
    @ResponseStatus(HttpStatus.OK)
    fun setAssignmentForPlant(
        @RequestHeader("Authorization") authHeader: String, 
        @PathVariable plantId: UUID, 
        @RequestBody assignment: AssignmentDtoRequest
    ): PlantDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")  
    
        return service.setAssignmentForPlant(plantId, assignment, userId).asDtoResponse()
    }
}