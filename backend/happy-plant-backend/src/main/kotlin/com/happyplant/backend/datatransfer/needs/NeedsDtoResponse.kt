package com.happyplant.backend.datatransfer.needs

import com.fasterxml.jackson.annotation.JsonProperty

data class NeedsDtoResponse (
    @JsonProperty("description") val description: String,
)
