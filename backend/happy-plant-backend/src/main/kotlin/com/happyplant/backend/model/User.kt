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

        @Column(name = "email_verification_token", nullable = true)
        var emailVerificationToken: String? = null,

        @Column(name = "email_verification_expires", nullable = true)
        var emailVerificationExpires: Long? = null,

        @Column(name = "reset_password_token", nullable = true)
        var resetPasswordToken: String? = null,

        @Column(name = "reset_password_expires", nullable = true)
        var resetPasswordExpires: Long? = null,

        @Column(name = "reset_password_code", nullable = true)
        var resetPasswordCode: Int? = null,

        @Column(name = "receive_push_notifications")
        var receivePushNotifications: Boolean,

        @Column(name = "push_notification_token")
        var pushNotificationToken: String? = null,

        @Column(name = "push_notifications_time")
        var pushNotificationsTime: LocalTime? = LocalTime.of(10,  0),

        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user", orphanRemoval = true)
        private var plants: MutableList<Plant>,

        @OneToMany (cascade= [CascadeType.ALL], mappedBy = "user", orphanRemoval = true)
        private var rooms: MutableList<Room>
)
{
        // Methods

        fun getActiveAssignments(): List<Assignment>
        {
                val activeAssignments = ArrayList<Assignment>()
                for(plant in plants){
                        activeAssignments.addAll(plant.getActiveAssignments().values)
                }
                return activeAssignments
        }
}
