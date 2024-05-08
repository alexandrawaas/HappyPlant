package com.happyplant.backend.datatransfer.needs

import com.happyplant.backend.model.Needs
import com.happyplant.backend.model.types.AssignmentType

fun Needs.asDtoResponse(): NeedsDtoResponse =
    NeedsDtoResponse(
        id = this.id,
        lightingType = this.lightingType,
        intervals = this.intervals
    )

fun NeedsDtoRequest.asEntity(): Needs =
    Needs(
        lightingType = this.lightingType,
        intervals = this.intervals ?: mapOf()
    )

fun NeedsDtoResponse.asEntity(): Needs =
    Needs(
        id = this.id,
        lightingType = this.lightingType,
        intervals = this.intervals
    )
