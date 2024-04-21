package com.happyplant.backend.controllers

import com.happyplant.backend.services.PlantsService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("plants")
class PlantsController (private val service:PlantsService) {
    @GetMapping
    fun test(): String = "plantscontroller works"
}