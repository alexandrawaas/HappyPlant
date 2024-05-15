package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.assignment.AssignmentDtoResponse
import com.happyplant.backend.service.AssignmentService
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import org.springframework.http.HttpStatus

@RestController
@RequestMapping("assignments")
class AssignmentController (
    private val service: AssignmentService,
    private val authTokenUtil: AuthTokenUtil
){
    @GetMapping
    @ResponseBody
    fun getActiveAssignments(@RequestHeader("Authorization") authHeader: String): List<AssignmentDtoResponse> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        return service.getActiveAssignments(userId)
    } 
}