package com.happyplant.backend.repository

import com.happyplant.backend.model.Pixel
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface PixelRepository: JpaRepository<Pixel,UUID> {
}