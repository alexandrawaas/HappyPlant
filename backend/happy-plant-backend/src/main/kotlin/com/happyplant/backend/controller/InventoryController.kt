package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.service.InventoryService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("inventory")
class InventoryController (private val service: InventoryService){
    @GetMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    fun getInventory(): List<PlantDtoResponse> = service.getInventory()
}