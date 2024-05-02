package com.happyplant.backend.datatransfer

import com.happyplant.backend.datatransfer.needs.NeedsDto
import com.happyplant.backend.datatransfer.pixel.PixelDto
import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import java.util.*

data class PlantDto(
    val id: UUID?,
    var name: String,
    var picturePath: String = "DefaultPicturePath",
    var notes: String?,
    var assignments: List<ActiveAssignmentDtoResponse>,
    var species: SpeciesDtoResponse,
    var pixel: PixelDto?,
    var needs: NeedsDto?,
) {
}
