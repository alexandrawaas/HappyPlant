package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.plant.PlantDtoRequest
import com.happyplant.backend.datatransfer.plant.asEntity
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.repository.PlantRepository
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.time.LocalDateTime
import java.util.*
import kotlin.jvm.optionals.getOrNull

@Service
class PlantService(private val db: PlantRepository) {
    fun getPlants(): List<Plant> =
        db.findAll().toList()   // TODO: Filter by active user ID

    fun getPlantsFiltered(search: String): List<Plant> =
        db.findAllByNameOrSpeciesName(search).toList()      // TODO: Filter by active user ID


    fun addPlant(newPlant: PlantDtoRequest): Plant =
        db.save(newPlant.asEntity(db))

    fun getPlant(id: UUID): Plant? {
        return db.findById(id).getOrNull()
    }

    fun alterPlant(id: UUID, plant: PlantDtoRequest): Unit {
        db.findById(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        db.save(plant.asEntity(db))
    }

    fun deletePlant(id: UUID): Unit {
        db.deleteById(id)
    }

    fun setAssignmentForPlant(plantId: UUID, assignmentId: UUID, date: LocalDateTime): Unit {
        val plant: Plant = db.findById(plantId).getOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        val assignmentKey: AssignmentType = plant.assignments.filter { it.value.id == assignmentId }.keys.firstOrNull() ?: throw ResponseStatusException(HttpStatus.NOT_FOUND)
        plant.assignments[assignmentKey]!!.lastDone = date
        db.save(plant)
    }
}