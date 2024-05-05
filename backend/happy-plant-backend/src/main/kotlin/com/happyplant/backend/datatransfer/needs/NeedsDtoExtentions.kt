package com.happyplant.backend.datatransfer.needs

import com.happyplant.backend.model.Needs

fun Needs.asDtoResponse(): NeedsDtoResponse =
    NeedsDtoResponse(
        lightingType = this.lightingType,
        intervals = this.intervals
    )

fun NeedsDtoResponse.asEntity(): Needs =
    Needs(
        lightingType = this.lightingType,
        intervals = this.intervals
    )
