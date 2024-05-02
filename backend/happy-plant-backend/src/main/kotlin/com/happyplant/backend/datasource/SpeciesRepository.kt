package com.happyplant.backend.datasource

import com.happyplant.backend.models.Species
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface SpeciesRepository: JpaRepository<Species, UUID> {
}