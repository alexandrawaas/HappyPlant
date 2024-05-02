package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.PlantDto
import com.happyplant.backend.service.InventoryService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("inventory")
class InventoryController (private val service: InventoryService){
    @GetMapping
    @ResponseBody
    fun getInventory(): List<PlantDto> = service.getInventory()
}