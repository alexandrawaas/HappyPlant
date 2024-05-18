package com.happyplant.backend.service

import com.happyplant.backend.model.Image
import com.happyplant.backend.model.Plant
import com.happyplant.backend.repository.ImageDataRepository
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.utility.ImageUtil
import jakarta.transaction.Transactional
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException
import java.util.*
import kotlin.jvm.optionals.getOrNull


@Service
@Transactional
class ImageDataService(
    private val db: ImageDataRepository,
    private val plantDb: PlantRepository
) {
    fun addImageToPlant(file: MultipartFile, plantId: UUID, userId: UUID): Plant {
        val plant: Plant =plantDb.findById(plantId).get()
        if(plant.user.id == userId){
            val imageId: UUID = UUID.randomUUID()
            db.save(
                Image(
                    id = imageId,
                    name = file.originalFilename,
                    type = file.contentType,
                    userId = userId,
                    imageData = ImageUtil.compressImage(file.bytes),
                )
            )
            plant.imageId = imageId
            plantDb.save(plant)
            return plant
        }
        else{
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
        }
    }

    fun getImage(imageId: UUID, userId: UUID): ByteArray {
        println(imageId.toString())
        val dbImage: Image? = db.findById(imageId).getOrNull()
        //val dbImage: Image = db.findAll().get(0)
        if(dbImage != null) {
            if (dbImage.userId == null || dbImage.userId == userId) {
                val image: ByteArray = ImageUtil.decompressImage(dbImage.imageData)
                return image
            } else {
                throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
            }
        }
        else{
            throw ResponseStatusException(HttpStatus.NOT_FOUND, "No Resource with given ID")
        }
    }

    fun removeImageFromPlant(plantId: UUID, userId: UUID): Plant {
        var plant: Plant =plantDb.findById(plantId).get()
        if(plant.user.id.equals(userId)){
            plant.imageId = plant.species.imageId
            plantDb.save(plant)
            return plant
        }
        else{
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
        }
    }
}