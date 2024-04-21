package com.happyplant.backend.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("plants")
class PlantsController {
    @GetMapping
    fun test(): String = "plantscontroller works"
}