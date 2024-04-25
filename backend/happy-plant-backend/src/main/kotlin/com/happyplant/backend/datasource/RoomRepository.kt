package com.happyplant.backend.datasource

import com.happyplant.backend.model.Room
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface RoomRepository: CrudRepository<Room, UUID> {
}