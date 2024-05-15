package com.happyplant.backend.datatransfer.plant

import com.happyplant.backend.datatransfer.assignment.asDtoResponse
import com.happyplant.backend.datatransfer.needs.asDtoResponse
import com.happyplant.backend.datatransfer.needs.asEntity
import com.happyplant.backend.datatransfer.room.asDtoResponseShort
import com.happyplant.backend.datatransfer.species.asDtoResponse
import com.happyplant.backend.model.Plant
import com.happyplant.backend.service.SpeciesService
import com.happyplant.backend.model.User

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
        hasOptimalLightingCondition = this.getLightingType() == pixel?.lightingType
    )

fun PlantDtoRequest.asEntity(
    speciesService: SpeciesService,
    user: User
): Plant =
    Plant(
        name = name,
        picturePath = picturePath,
        notes = notes,
        species = speciesService.getSpecies(speciesId),
        user = user,
        needs = needs?.asEntity() ?: speciesService.getSpecies(speciesId).needs,
    )
