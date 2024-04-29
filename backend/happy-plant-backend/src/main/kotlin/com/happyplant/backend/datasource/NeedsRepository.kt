package com.happyplant.backend.datasource

import com.happyplant.backend.model.Needs
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface NeedsRepository: CrudRepository<Needs, UUID> {
}