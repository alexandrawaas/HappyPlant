package com.happyplant.backend.repository

import com.happyplant.backend.model.Room
import com.happyplant.backend.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.UUID

interface RoomRepository: JpaRepository<Room, UUID>, JpaSpecificationExecutor<Room> {
    fun findAllByUser(user: User): Iterable<Room>
    fun findAllByNameContainingIgnoreCaseAndUser(name: String, user: User): Iterable<Room>
}
