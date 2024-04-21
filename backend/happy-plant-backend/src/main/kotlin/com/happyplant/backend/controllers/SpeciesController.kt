package com.happyplant.backend.controllers

import com.happyplant.backend.services.PlantsService
import com.happyplant.backend.services.SpeciesService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("species")
class SpeciesController (private val service: SpeciesService){

}