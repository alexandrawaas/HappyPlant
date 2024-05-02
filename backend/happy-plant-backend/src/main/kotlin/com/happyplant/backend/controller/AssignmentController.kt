package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.ActiveAssignmentDtoResponse
import com.happyplant.backend.service.AssignmentService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("assignments")
class AssignmentController (private val service: AssignmentService){
    @GetMapping
    @ResponseBody
    fun getActiveAssignments(): List<ActiveAssignmentDtoResponse> = service.getActiveAssignments()
}