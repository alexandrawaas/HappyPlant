package com.happyplant.backend.datatransfer.species

import com.happyplant.backend.datatransfer.needs.asDtoResponse
import com.happyplant.backend.datatransfer.needs.asEntity
import com.happyplant.backend.model.Species

fun Species.asDtoResponse(): SpeciesDtoResponse =
    SpeciesDtoResponse(
        id = this.id,
        name = this.name,
        latinName = this.latinName,
        imageId = this.imageId,
        family = this.family,
        description = this.description,
        needs = this.needs.asDtoResponse(),
    )

fun SpeciesDtoResponse.asEntity(): Species =
    Species(
        name = this.name,
        latinName = this.latinName,
        imageId = this.imageId,
        family = this.family,
        description = this.description,
        needs = this.needs.asEntity(),
    )
