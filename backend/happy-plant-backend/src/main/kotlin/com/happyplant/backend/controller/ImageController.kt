package com.happyplant.backend.controller

import com.happyplant.backend.datatransfer.plant.PlantDtoResponse
import com.happyplant.backend.datatransfer.plant.asDtoResponse
import com.happyplant.backend.model.Image
import com.happyplant.backend.model.Plant
import com.happyplant.backend.service.ImageDataService
import com.happyplant.backend.utility.AuthTokenUtil
import com.happyplant.backend.utility.ImageUtil
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
        val userId = authTokenUtil.getUserIdFromToken(authHeader) ?: throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")

        if(
            file.contentType.equals("jpeg")
            || file.contentType.equals("jpg")
            || file.contentType.equals("png")
            || file.contentType.equals("gif")
        ) {
            val plant: Plant = service.addImageToPlant(file, plantId, userId)
            return plant.asDtoResponse()
        }
        else{
            throw ResponseStatusException(HttpStatus.UNSUPPORTED_MEDIA_TYPE, "only jpg, png and gif supported")
        }
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
        @RequestHeader("Authorization") authHeader: String?,
        @PathVariable imageId: UUID
    ): ResponseEntity<ByteArray> {
        //TODO Link bei Speciesgetter und Pflanzengetter

        var loggedIn: Boolean = false
        var userId: UUID? = null
        if(authHeader != null){
            userId = authTokenUtil.getUserIdFromToken(authHeader)
            if(userId != null){
                loggedIn = true
            }
        }

        val response = ResponseEntity.status(HttpStatus.OK)

        val image: Image = service.getImage(imageId, loggedIn, userId)
        val imageData: ByteArray = ImageUtil.decompressImage(image.imageData)
        var mediaType: String? = image.type

        if(mediaType.equals("jpeg") || mediaType.equals("jpg")) {
            response.contentType(MediaType.IMAGE_JPEG)
        }
        else if(mediaType.equals("png")) {
            response.contentType(MediaType.IMAGE_PNG)
        }
        else if(mediaType.equals("gif")) {
            response.contentType(MediaType.IMAGE_GIF)
        }
        else{
            throw ResponseStatusException(HttpStatus.UNSUPPORTED_MEDIA_TYPE, "Mediatype is no image")
        }

        return response.body(imageData)
    }

}