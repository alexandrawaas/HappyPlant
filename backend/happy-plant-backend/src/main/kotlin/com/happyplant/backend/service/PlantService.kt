package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.assignment.AssignmentDtoRequest
import com.happyplant.backend.datatransfer.needs.asEntity
import com.happyplant.backend.datatransfer.plant.PlantDtoRequest
import com.happyplant.backend.datatransfer.plant.asEntity
import com.happyplant.backend.model.Plant
import com.happyplant.backend.repository.PlantRepository
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.util.*
import kotlin.jvm.optionals.getOrNull

@Service
class PlantService(
    private val db: PlantRepository,
    private val speciesService: SpeciesService,
    private val userService: UserService
) {
    fun save(plant: Plant) =
        db.save(plant)

    fun getPlants(userId: UUID): List<Plant> {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        return db.findAllByUser(user).toList()
    } 

    fun getPlantsFiltered(search: String, userId: UUID): List<Plant> {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        return db.findAllByNameContainingIgnoreCaseOrSpeciesNameContainingIgnoreCaseAndUser(search, search, user).toList()
//        return userPlants.filter { plant ->
//            plant.name.contains(search, ignoreCase = true) || plant.species.name.contains(search, ignoreCase = true)
//        }
    }

    fun addPlant(newPlant: PlantDtoRequest, userId: UUID): Plant {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val plantToSave = newPlant.asEntity(speciesService, user)
        return db.save(plantToSave)
    }

    fun getPlant(plantId: UUID, userId: UUID): Plant? {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val plant = getPlantFromDb(plantId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant not found")

        if (user.id == plant.user.id) {
            return plant
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not own this plant")
        }
    }

    fun alterPlant(plantId: UUID, plant: PlantDtoRequest, userId: UUID): Plant {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val plantToSave = getPlantFromDb(plantId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant not found")

        if (user.id == plantToSave.user.id) {
            val patchedPlant = plantToSave.copy(
                name = plant.name,
                species = speciesService.getSpecies(plant.speciesId),
                notes = plant.notes,
                needs = plant.needs?.asEntity() ?: plantToSave.needs)
            patchedPlant.needs?.intervals?.forEach { if (!patchedPlant.assignments.keys.contains(it.key)) patchedPlant.addAssignment(assignmentType = it.key, lastDone = null) }

            return db.save(patchedPlant)
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to alter this plant")
        }
    }

    fun deletePlant(plantId: UUID, userId: UUID): Unit {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val plant = getPlantFromDb(plantId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant not found")

        if (user.id == plant.user.id) {
            db.deleteById(plantId)
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to delete this plant")
        }
    }

    fun setAssignmentForPlant(plantId: UUID, assignment: AssignmentDtoRequest, userId: UUID): Plant {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        val plant = getPlantFromDb(plantId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant not found")

        if (user.id == plant.user.id) {
            plant.assignments[assignment.assignmentType]?.lastDone = assignment.lastDone
            return db.save(plant)
        } else {
            throw ResponseStatusException(HttpStatus.FORBIDDEN, "User does not have permission to set assignments for this plant")  
        }

    }

    private fun getPlantFromDb(plantId: UUID): Plant? {
        return db.findById(plantId).getOrNull()
    }
}
