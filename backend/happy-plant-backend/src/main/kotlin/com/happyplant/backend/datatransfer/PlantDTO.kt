package com.happyplant.backend.datatransfer

import com.happyplant.backend.models.*
import com.happyplant.backend.models.types.AssignmentType
import jakarta.persistence.*
import org.jetbrains.annotations.NotNull
import java.util.*

data class PlantDTO(
        val id: UUID?,
        var name: String,
        var picturePath: String = "DefaultPicturePath",
        var notes: String?,
        var assignments: List<ActiveAssignmentDTOResponse>,
        var species: SpeciesDTO,
        var pixel: PixelDTO?,
        var needs: NeedsDTO?,
) {
}