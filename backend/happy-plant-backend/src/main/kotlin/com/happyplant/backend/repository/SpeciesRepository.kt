package com.happyplant.backend.repository

import com.happyplant.backend.model.Species
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface SpeciesRepository : JpaRepository<Species, UUID> {
    fun findByName(name: String): Optional<Species>
}