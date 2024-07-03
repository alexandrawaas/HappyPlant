package com.happyplant.backend.model

import jakarta.persistence.*
import java.time.LocalTime
import java.util.*

@Entity
@Table(name="users")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.UUID) 
        var id: UUID = UUID.randomUUID(),

        @Column(name = "email", nullable = false)
        val email: String,

        @Column(name = "password", nullable = false)
        var passwordHash: String,

        @Column(name = "email_verified", nullable = false)
        var emailVerified: Boolean = false,

        @Column(name = "receive_push_notifications")
        var receivePushNotifications: Boolean,

        @Column(name = "push_notification_token")
        var pushNotificationToken: String? = null,

        @Column(name = "push_notifications_time")
        var pushNotificationsTime: LocalTime? = LocalTime.of(10,  0),

        @OneToOne(cascade = [CascadeType.ALL])
        @JoinColumn(name = "reset_password_otp_id", referencedColumnName = "id")
        var resetPasswordOtp: ResetPasswordOtp? = null,
    
        @OneToOne(cascade = [CascadeType.ALL])
        @JoinColumn(name = "verify_email_otp_id", referencedColumnName = "id")
        var verifyEmailOtp: VerifyEmailOtp? = null,

        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user", orphanRemoval = true)
        private var plants: MutableList<Plant>,

        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user", orphanRemoval = true)
        private var rooms: MutableList<Room>
)
{
        companion object {
                val DUMMY_USER = User(
                        id = UUID.fromString("f789034b-737d-46e4-a3a4-72924b2138b7"),
                        email = "foo@bar.com",
                        passwordHash = "12345",
                        receivePushNotifications = true,
                        pushNotificationToken = "ExponentPushToken[Wx9b-UKX5NSxWFpCb8ke4f]",
                        pushNotificationsTime = LocalTime.of(17, 47),
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
