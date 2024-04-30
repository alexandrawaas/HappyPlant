package com.happyplant.backend.datasource

import com.happyplant.backend.models.Assignment
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface AssignmentRepository: JpaRepository<Assignment, UUID> {
}