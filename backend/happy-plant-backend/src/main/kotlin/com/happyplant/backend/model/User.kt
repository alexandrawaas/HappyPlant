package com.happyplant.backend.model

import jakarta.persistence.*
import org.jetbrains.annotations.NotNull
import java.time.LocalTime
import java.util.*

@Entity
@Table(name="users")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        @NotNull var email: String,
        @NotNull val passwordHash: String,
        @Column var receivePushNotifications: Boolean,
        @Column var pushNotificationsTime: LocalTime?,
        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user") var plants: ArrayList<Plant>,
        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user") var rooms: ArrayList<Room>
)
{
        // Getters and Setters

        fun getEmail(): String {
                return email
        }

        fun setEmail(email: String) {
                this.email = email
        }

        fun getPasswordHash(): String {
                return passwordHash
        }

        fun setPasswordHash(email: String) {
                this.email = passwordHash
        }

        fun getReceivePushNotifications(): Boolean {
                return receivePushNotifications
        }

        fun setReceivePushNotifications(receivePushNotifications: Boolean) {
                this.receivePushNotifications = receivePushNotifications
        }

        fun getPushNotificationsTime(): LocalTime? {
                return pushNotificationsTime
        }

        fun setPushNotificationsTime(pushNotificationsTime: LocalTime?) {
                this.pushNotificationsTime = pushNotificationsTime
        }

        fun getPlants(): ArrayList<Plant>
        {
                return plants
        }

        fun setPlants(plants: ArrayList<Plant>)
        {
                this.plants = plants
        }

        fun getRooms(): ArrayList<Room>
        {
                return rooms
        }

        fun setRooms(rooms: ArrayList<Room>)
        {
                this.rooms = rooms
        }
}