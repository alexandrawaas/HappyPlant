package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.assignment.AssignmentDtoRequest
import com.happyplant.backend.datatransfer.assignment.asEntity
import com.happyplant.backend.datatransfer.needs.asEntity
import com.happyplant.backend.datatransfer.plant.PlantDtoRequest
import com.happyplant.backend.datatransfer.plant.asEntity
import com.happyplant.backend.datatransfer.species.asEntity
import com.happyplant.backend.model.Assignment
import com.happyplant.backend.model.Needs
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.repository.SpeciesRepository
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.time.LocalDateTime
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

    fun getPlants(): List<Plant> =
        db.findAll().toList()   // TODO: Filter by active user ID

    fun getPlantsFiltered(search: String): List<Plant> =
        db.findAllByNameContainingIgnoreCaseOrSpeciesNameContainingIgnoreCase(search, search).toList()      // TODO: Filter by active user ID


    fun addPlant(newPlant: PlantDtoRequest): Plant {
        val plantToSave = newPlant.asEntity(speciesService, userService)
        return db.save(plantToSave)
    }

    fun getPlant(id: UUID): Plant? {
        return db.findById(id).getOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant not found")
    }

    fun alterPlant(id: UUID, plant: PlantDtoRequest): Plant {
        val plantToSave = getPlant(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant not found")
        val patchedPlant = plantToSave.copy(
            name = plant.name,
            species = speciesService.getSpecies(plant.speciesId),
            notes = plant.notes,
            picturePath = plant.picturePath,
            needs = plant.needs?.asEntity() ?: plantToSave.needs)
        patchedPlant.needs?.intervals?.forEach { if (!patchedPlant.assignments.keys.contains(it.key)) patchedPlant.addAssignment(assignmentType = it.key, lastDone = null) }
        return db.save(patchedPlant)
    }

    fun deletePlant(id: UUID): Unit {
        db.deleteById(id)
    }

    fun setAssignmentForPlant(plantId: UUID, assignment: AssignmentDtoRequest): Plant {
        val plant: Plant = db.findById(plantId).getOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "Plant not found")
        plant.assignments[assignment.assignmentType]?.lastDone = assignment.lastDone
        return db.save(plant)
    }
}