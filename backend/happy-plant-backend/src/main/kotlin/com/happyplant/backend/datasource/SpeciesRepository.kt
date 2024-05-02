package com.happyplant.backend.datasource

import com.happyplant.backend.model.Species
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface SpeciesRepository: JpaRepository<Species, UUID> {
}