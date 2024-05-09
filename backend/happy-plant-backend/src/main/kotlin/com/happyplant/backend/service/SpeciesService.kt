package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import com.happyplant.backend.datatransfer.species.asDtoResponse
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.Species
import com.happyplant.backend.repository.SpeciesRepository
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.util.UUID
import kotlin.jvm.optionals.getOrElse

@Service
class SpeciesService(private val db: SpeciesRepository) {
    fun getSpecies(speciesId: UUID): Species =
        db.findById(speciesId)
            .getOrElse {
                throw ResponseStatusException(HttpStatus.NOT_FOUND, "species id '$speciesId' not found.")
            }

    fun getSpecies(): List<Species> =
        db.findAll()

    fun getSpeciesFiltered(search: String): List<Species> =
        db.findAllByNameContainingIgnoreCase(search).toList()

}
