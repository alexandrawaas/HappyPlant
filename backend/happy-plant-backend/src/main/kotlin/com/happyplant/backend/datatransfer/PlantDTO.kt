package com.happyplant.backend.datatransfer

import com.happyplant.backend.datatransfer.pixel.PixelDto
import java.util.*

data class PlantDTO(
    val id: UUID?,
    var name: String,
    var picturePath: String = "DefaultPicturePath",
    var notes: String?,
    var assignments: List<ActiveAssignmentDTOResponse>,
    var species: SpeciesDTO,
    var pixel: PixelDto?,
    var needs: NeedsDTO?,
) {
}