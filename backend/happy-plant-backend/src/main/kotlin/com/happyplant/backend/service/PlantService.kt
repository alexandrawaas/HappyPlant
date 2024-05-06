package com.happyplant.backend.service

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
class PlantService(private val db: PlantRepository,
                   private val speciesRepository: SpeciesRepository) {
    fun getPlants(): List<Plant> =
        db.findAll().toList()   // TODO: Filter by active user ID

    fun getPlantsFiltered(search: String): List<Plant> =
        db.findAllByNameContainingIgnoreCaseOrSpeciesNameContainingIgnoreCase(search, search).toList()      // TODO: Filter by active user ID


    fun addPlant(newPlant: PlantDtoRequest): Plant {
        var plantToSave = newPlant.asEntity(speciesRepository)
        plantToSave = db.save(plantToSave)
        val assignments = mutableMapOf<AssignmentType, Assignment>()
        plantToSave.needs?.intervals?.forEach {
            assignments[it.key] = Assignment(lastDone = null, plant = plantToSave)
        }
        val newAssignments = newPlant.assignments.mapValues { it.value.asEntity(plantToSave) }
        assignments += newAssignments
        plantToSave.assignments = assignments
        return db.save(plantToSave)
    }

    fun getPlant(id: UUID): Plant? {
        return db.findById(id).getOrNull()
    }

    fun alterPlant(id: UUID, plant: PlantDtoRequest): Plant {
        val plantToSave = db.findById(id).getOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        plantToSave.name = plant.name
        plantToSave.species = speciesRepository.findById(plant.speciesId).getOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        plantToSave.notes = plant.notes
        plantToSave.picturePath = plant.picturePath
        if (plant.needs != null) plantToSave.needs = plant.needs!!.asEntity()
        plantToSave.assignments += plant.assignments.mapValues { it.value.asEntity(plantToSave) }
        return db.save(plantToSave)
    }

    fun deletePlant(id: UUID): Unit {
        db.deleteById(id)
    }

    fun setAssignmentForPlant(plantId: UUID, assignmentId: UUID, date: LocalDateTime): Plant {
        val plant: Plant = db.findById(plantId).getOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        val assignmentKey: AssignmentType = plant.assignments.filter { it.value.id == assignmentId }.keys.firstOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        plant.assignments[assignmentKey]!!.lastDone = date
        return db.save(plant)
    }
}