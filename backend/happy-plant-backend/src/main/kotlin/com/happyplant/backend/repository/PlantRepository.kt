package com.happyplant.backend.repository

import com.happyplant.backend.model.Plant
import com.happyplant.backend.model.User
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface PlantRepository: JpaRepository<Plant, UUID> {
    // fun findAllByNameContainingIgnoreCaseOrSpeciesNameContainingIgnoreCase(query: String, query2: String): Iterable<Plant>
    fun findAllByUser(user: User): Iterable<Plant>
    fun findAllByNameContainingIgnoreCaseOrSpeciesNameContainingIgnoreCaseAndUser(query: String, query2: String, user: User): Iterable<Plant>
}