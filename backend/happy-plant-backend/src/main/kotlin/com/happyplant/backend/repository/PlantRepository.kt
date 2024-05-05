package com.happyplant.backend.repository

import com.happyplant.backend.model.Plant
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface PlantRepository: JpaRepository<Plant, UUID> {
    fun findAllByNameOrSpeciesName(query: String): Iterable<Plant>
    fun findAllByUserId(userId: UUID): Iterable<Plant>
}