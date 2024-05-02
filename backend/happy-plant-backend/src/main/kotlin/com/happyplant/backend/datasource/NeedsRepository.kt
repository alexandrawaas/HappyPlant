package com.happyplant.backend.datasource

import com.happyplant.backend.model.Needs
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface NeedsRepository: JpaRepository<Needs, UUID> {
}