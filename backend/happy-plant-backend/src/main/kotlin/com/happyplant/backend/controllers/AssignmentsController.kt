package com.happyplant.backend.controllers

import com.happyplant.backend.datatransfer.ActiveAssignmentDTOResponse
import com.happyplant.backend.services.AssignmentsService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("assignments")
class AssignmentsController (private val service: AssignmentsService){
    @GetMapping
    @ResponseBody
    fun getActiveAssignments(): List<ActiveAssignmentDTOResponse> = service.getActiveAssignments()
}