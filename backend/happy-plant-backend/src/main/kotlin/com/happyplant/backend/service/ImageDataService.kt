package com.happyplant.backend.service

import com.happyplant.backend.model.Image
import com.happyplant.backend.model.Plant
import com.happyplant.backend.repository.ImageDataRepository
import com.happyplant.backend.repository.PlantRepository
import com.happyplant.backend.utility.ImageUtil
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException
import java.util.*


@Service
class ImageDataService(
    private val db: ImageDataRepository,
    private val plantDb: PlantRepository
) {
    fun addImageToPlant(file: MultipartFile, plantId: UUID, userId: UUID): Plant {
        var plant: Plant =plantDb.findById(plantId).get()
        if(plant.user.id.equals(userId)){
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
        val dbImage: Optional<Image?> = db.findById(imageId)
        if(dbImage.get().userId == null || dbImage.get().userId!!.equals(userId)){
            val image: ByteArray = ImageUtil.decompressImage(dbImage.get().imageData)
            return image
        }
        else{
            throw ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid or missing authorization token")
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