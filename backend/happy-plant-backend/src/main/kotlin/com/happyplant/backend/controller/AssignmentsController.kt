package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.ActiveAssignmentDtoResponse
import com.happyplant.backend.service.AssignmentsService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("assignments")
class AssignmentsController (private val service: AssignmentsService){
    @GetMapping
    @ResponseBody
    fun getActiveAssignments(): List<ActiveAssignmentDtoResponse> = service.getActiveAssignments()
}