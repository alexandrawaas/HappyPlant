package com.happyplant.backend.repository

import com.happyplant.backend.model.Assignment
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface AssignmentRepository: JpaRepository<Assignment, UUID> {
}