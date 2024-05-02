package com.happyplant.backend.datasource

import com.happyplant.backend.models.Pixel
import java.util.UUID
import org.springframework.data.jpa.repository.JpaRepository

interface PixelRepository: JpaRepository<Pixel,UUID> {
}