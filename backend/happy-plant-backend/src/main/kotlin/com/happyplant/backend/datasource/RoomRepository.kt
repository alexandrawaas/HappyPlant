package com.happyplant.backend.datasource

import com.happyplant.backend.models.Room
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

@Repository
interface RoomRepository: CrudRepository<Room, UUID> {
    fun findAllByName(name: String): Iterable<Room>
}
