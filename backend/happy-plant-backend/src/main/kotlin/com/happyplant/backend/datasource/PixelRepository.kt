package com.happyplant.backend.datasource

import com.happyplant.backend.model.Pixel
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface PixelRepository: CrudRepository<Pixel,UUID> {
}