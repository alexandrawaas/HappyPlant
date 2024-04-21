package com.happyplant.backend.controllers

import com.happyplant.backend.services.PlantsService
import com.happyplant.backend.services.RoomsService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("rooms")
class RoomsController (private val service: RoomsService){
}