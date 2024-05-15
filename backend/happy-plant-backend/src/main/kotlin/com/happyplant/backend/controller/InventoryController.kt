package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.service.InventoryService
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException


@RestController
@RequestMapping("inventory")
class InventoryController (
    private val service: InventoryService,
    private val authTokenUtil: AuthTokenUtil
){
    @GetMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    fun getInventory(@RequestHeader("Authorization") authHeader: String): List<PlantDtoResponse> {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        return service.getInventory(userId)
    }
}