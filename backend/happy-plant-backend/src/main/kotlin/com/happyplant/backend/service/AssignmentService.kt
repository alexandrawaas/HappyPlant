package com.happyplant.backend.service

import com.happyplant.backend.datatransfer.assignment.AssignmentDtoResponse
import com.happyplant.backend.datatransfer.assignment.asDtoResponse
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.service.UserService
import org.springframework.stereotype.Service
import org.springframework.web.server.ResponseStatusException
import org.springframework.http.HttpStatus
import java.util.*

@Service
class AssignmentService(
    private val db: PlantRepository,
    private val userService: UserService
) {
    fun getActiveAssignments(userId: UUID): List<AssignmentDtoResponse> {
        val user = userService.getUser(userId) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")

        return db.findAllByUser(user).flatMap { plant ->
            plant.getActiveAssignments().map {
                it.value.asDtoResponse(it.key)
            }
        }
    }
}