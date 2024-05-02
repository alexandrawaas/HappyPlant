package com.happyplant.backend.datatransfer.needs

import com.happyplant.backend.model.Needs

fun Needs.asDtoResponse(): NeedsDtoResponse =
    NeedsDtoResponse(
        description = "temporal foobar"
    )
