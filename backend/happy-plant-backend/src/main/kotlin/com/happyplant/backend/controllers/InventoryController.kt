package com.happyplant.backend.controllers

import com.happyplant.backend.model.Plant
import com.happyplant.backend.services.InventoryService
import com.happyplant.backend.services.PlantsService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("inventory")
class InventoryController (private val service: InventoryService){
    @GetMapping
    @ResponseBody
    fun getInventory(): List<Plant> = service.getInventory()
}