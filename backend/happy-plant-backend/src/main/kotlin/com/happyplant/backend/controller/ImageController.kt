package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.model.Plant
import com.happyplant.backend.service.ImageDataService
import com.happyplant.backend.utility.AuthTokenUtil
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException
import java.util.*

@RestController
@RequestMapping("images")
class ImageController (private val service: ImageDataService, private val authTokenUtil: AuthTokenUtil){

    @PostMapping
    @ResponseBody
    fun addImageToPlant(
        @RequestHeader("Authorization") authHeader: String,
        @RequestBody file: MultipartFile,
        @RequestParam plantId: UUID,
    ): PlantDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        val plant: Plant = service.addImageToPlant(file, plantId, userId)
        return plant.asDtoResponse()
    }

    @PatchMapping
    @ResponseBody
    fun removeImageFromPlant(
        @RequestHeader("Authorization") authHeader: String,
        @RequestParam plantId: UUID,
    ): PlantDtoResponse {
        val userId = authTokenUtil.getUserIdFromToken(authHeader)
            ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        val plant: Plant = service.removeImageFromPlant(plantId, userId)
        return plant.asDtoResponse()
    }

    @GetMapping("/{imageId}")
    @ResponseBody
    fun getPlant(
        //@RequestHeader("Authorization") authHeader: String,
        @PathVariable imageId: UUID
    ): ResponseEntity<ByteArray> {
        //val userId = authTokenUtil.getUserIdFromToken(authHeader) ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        val bytes: ByteArray = service.getImage(imageId, imageId)

        return ResponseEntity
            .status(HttpStatus.OK)
            .contentType(MediaType.IMAGE_JPEG)
            .body(bytes)
    }

}