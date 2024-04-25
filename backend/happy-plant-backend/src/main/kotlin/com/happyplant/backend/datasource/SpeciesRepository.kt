package com.happyplant.backend.datasource

import com.happyplant.backend.model.Species
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface SpeciesRepository: CrudRepository<Species, UUID> {
}