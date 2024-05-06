package com.happyplant.backend.datatransfer.plant

import com.happyplant.backend.datatransfer.assignment.asDtoResponse
import com.happyplant.backend.datatransfer.assignment.asEntity
import com.happyplant.backend.datatransfer.needs.asDtoResponse
import com.happyplant.backend.datatransfer.needs.asEntity
import com.happyplant.backend.datatransfer.room.asDtoResponseShort
import com.happyplant.backend.datatransfer.species.asDtoResponse
import com.happyplant.backend.datatransfer.species.asEntity
import com.happyplant.backend.model.Needs
import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.User
import com.happyplant.backend.repository.SpeciesRepository
import com.happyplant.backend.service.SpeciesService
import kotlin.jvm.optionals.getOrNull

fun Plant.asDtoResponse(): PlantDtoResponse =
    PlantDtoResponse(
        id = this.id,
        name = this.name,
        picturePath = this.picturePath,
        notes = this.notes,
        assignments = this.assignments.map { it.value.asDtoResponse(it.key) },
        species = this.species.asDtoResponse(),
        room = this.pixel?.room?.asDtoResponseShort(),
        needs = this.needs?.asDtoResponse(),
    )

fun PlantDtoRequest.asEntity(
    speciesRepository: SpeciesRepository,
): Plant {
    return Plant(
        name = name,
        picturePath = picturePath,
        notes = notes,
        assignments = mapOf(),
        species = speciesRepository.findById(speciesId).getOrNull() ?: throw IllegalArgumentException("Species not found"),
        needs = needs?.asEntity() ?: speciesRepository.findById(speciesId).getOrNull()?.needs ?: throw IllegalArgumentException("Species not found"),
        pixel = null,
        user = User.DUMMY_USER // TODO: get user from token
    )
}
