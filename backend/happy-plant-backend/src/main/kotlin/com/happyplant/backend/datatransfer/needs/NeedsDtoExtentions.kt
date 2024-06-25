package com.happyplant.backend.datatransfer.needs

import com.happyplant.backend.model.Needs
import com.happyplant.backend.model.types.AssignmentType

fun Needs.asDtoResponse(): NeedsDtoResponse {
    val responseIntervals = this.intervals.toMutableMap();
    AssignmentType.values().forEach {
        if (!responseIntervals.containsKey(it)) {
            responseIntervals[it] = Needs.EMPTY_INTERVAL
        }
    }
    return NeedsDtoResponse(
        id = this.id,
        lightingType = this.lightingType,
        intervals = responseIntervals
    )}

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
