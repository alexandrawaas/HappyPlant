package com.happyplant.backend.repository

import com.happyplant.backend.model.Room
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.UUID

interface RoomRepository: JpaRepository<Room, UUID> {
    fun findAllByName(name: String): Iterable<Room>
}