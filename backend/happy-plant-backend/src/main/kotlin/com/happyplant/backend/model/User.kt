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
        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user") private var plants: MutableList<Plant>,
        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user") private var rooms: MutableList<Room>
)
{
        companion object {
                val DUMMY_USER = User(
                        id = UUID.fromString("f789034b-737d-46e4-a3a4-72924b2138b7"),
                        email = "foo@bar.com",
                        passwordHash = "12345",
                        receivePushNotifications = true,
                        pushNotificationsTime = LocalTime.now(),
                        plants = mutableListOf(),
                        rooms = mutableListOf(),
                )
        }

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
