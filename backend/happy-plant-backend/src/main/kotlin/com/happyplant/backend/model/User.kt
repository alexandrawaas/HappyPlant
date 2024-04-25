package com.happyplant.backend.model

import jakarta.persistence.*
import org.jetbrains.annotations.NotNull
import java.time.LocalTime
import java.util.*

@Entity
@Table(name="users")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @NotNull private var email: String,
        @NotNull private val passwordHash: String,
        @Column private var receivePushNotifications: Boolean,
        @Column private var pushNotificationsTime: LocalTime?,
        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user") private var plants: ArrayList<Plant>,
        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user") private var rooms: ArrayList<Room>
)
{
        // Methods

        fun getActiveAssignments(): List<Assignment>
        {
                val activeAssignments = ArrayList<Assignment>()
                //TODO: Implement
                return activeAssignments
        }

        fun getAllAssignments(): List<Assignment>
        {
                val allAssignments = ArrayList<Assignment>()
                //TODO: Implement
                return allAssignments
        }

        fun getAllPlants(): List<Plant>
        {
                //TODO: Implement
                return plants
        }

        fun getAllRooms(): List<Room>
        {
                //TODO: Implement
                return rooms
        }

        fun addPlant(plant: Plant)
        {
                //TODO: Implement
                plants.add(plant)
        }

        fun addRoom(room: Room)
        {
                //TODO: Implement
                rooms.add(room)
        }
}