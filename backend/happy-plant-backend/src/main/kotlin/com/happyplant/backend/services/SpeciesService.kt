package com.happyplant.backend.services

import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import com.happyplant.backend.datatransfer.species.asDtoResponse
import com.happyplant.backend.datasource.SpeciesRepository
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import java.util.UUID
import kotlin.jvm.optionals.getOrElse

@Service
class SpeciesService(private val db: SpeciesRepository) {
    fun getSpecies(speciesId: UUID): SpeciesDtoResponse =
        db.findById(speciesId).map { it.asDtoResponse() }
            .getOrElse {
                throw ResponseStatusException(HttpStatus.NOT_FOUND, "species id '$speciesId' not found.")
            }


    fun getSpecies(): List<SpeciesDtoResponse> =
        db.findAll().map { it.asDtoResponse() }
}
