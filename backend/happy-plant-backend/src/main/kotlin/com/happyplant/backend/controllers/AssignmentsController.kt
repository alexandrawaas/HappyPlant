package com.happyplant.backend.controllers

import com.happyplant.backend.services.AssignmentsService
import com.happyplant.backend.services.PlantsService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("assignments")
class AssignmentsController (private val service: AssignmentsService){
}