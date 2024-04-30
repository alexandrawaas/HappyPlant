package com.happyplant.backend.datatransfer

import com.happyplant.backend.models.Needs
import jakarta.persistence.*
import java.util.*

class SpeciesDTO(
        val id: UUID,
        var name: String,
        var latinName: String,
        var picturePath: String,
        var family: String,
        var description: String,
        var needs: NeedsDTO,
) {
}