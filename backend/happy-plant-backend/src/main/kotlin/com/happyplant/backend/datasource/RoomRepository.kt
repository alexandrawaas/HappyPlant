package com.happyplant.backend.datasource

import com.happyplant.backend.models.Room
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface RoomRepository: JpaRepository<Room, UUID> {
}