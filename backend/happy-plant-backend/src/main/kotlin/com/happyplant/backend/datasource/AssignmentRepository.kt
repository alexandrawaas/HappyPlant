package com.happyplant.backend.datasource

import com.happyplant.backend.model.Assignment
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface AssignmentRepository: CrudRepository<Assignment, UUID> {
}