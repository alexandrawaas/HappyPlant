package com.happyplant.backend.repository

import com.happyplant.backend.model.Image
import com.happyplant.backend.model.Species
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*


interface ImageDataRepository : JpaRepository<Image, UUID>{
    fun findByName(name: String): Image?
}