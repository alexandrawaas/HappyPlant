package com.happyplant.backend.models.types

import kotlin.math.max
import kotlin.math.min

enum class LightingType {
    //ordinals are used for accumulation
    FULL_SHADE, //0
    PART_SHADE,  //1
    SUN,  //2
    FULL_SUN;  //3

    operator fun plus(other: LightingType): LightingType =
        LightingType.values()[min((this.ordinal + other.ordinal), values().size-1)]

    operator fun dec() =
        LightingType.values()[max((this.ordinal - 1),0)]
}