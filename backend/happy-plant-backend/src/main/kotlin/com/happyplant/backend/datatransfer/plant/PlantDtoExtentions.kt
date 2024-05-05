package com.happyplant.backend.datatransfer.plant

import com.happyplant.backend.datatransfer.assignment.asDtoResponse
import com.happyplant.backend.datatransfer.assignment.asEntity
import com.happyplant.backend.datatransfer.needs.asDtoResponse
import com.happyplant.backend.datatransfer.needs.asEntity
import com.happyplant.backend.datatransfer.room.asDtoResponseShort
import com.happyplant.backend.datatransfer.species.asDtoResponse
import com.happyplant.backend.datatransfer.species.asEntity
import com.happyplant.backend.model.Plant
import com.happyplant.backend.service.NeedsService
import com.happyplant.backend.service.PlantService
import com.happyplant.backend.service.SpeciesService

fun Plant.asDtoResponse(): PlantDtoResponse =
    PlantDtoResponse(
        id = this.id,
        name = this.name,
        picturePath = this.picturePath,
        notes = this.notes,
        assignments = this.assignments.values.map { it.asDtoResponse() },
        species = this.species.asDtoResponse(),
        room = this.pixel?.room?.asDtoResponseShort(),
        needs = this.needs?.asDtoResponse(),
    )

fun PlantDtoRequest.asEntity(plantService: PlantService, speciesService: SpeciesService, needsService: NeedsService): Plant =
    Plant(
        name = this.name,
        picturePath = this.picturePath,
        notes = this.notes,
        assignments = this.assignments.mapValues { it.value.asEntity() },
        species = speciesService.getSpecies(this.speciesId).asEntity() ?: throw IllegalArgumentException("Species not found"),
        needs = needsService.getNeeds(this.needsId).asEntity(),
        //pixel = plantService.getPlant(this.id)?.pixel,
        //user = plantService.getPlant(this.id)?.user,
    )