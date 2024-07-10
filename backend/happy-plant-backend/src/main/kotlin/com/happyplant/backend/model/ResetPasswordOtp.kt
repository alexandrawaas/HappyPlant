package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "reset_password_otp")
data class ResetPasswordOtp(
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID = UUID.randomUUID(),

    @Column(name = "expires", nullable = true)
    var expires: Long? = null,

    @Column(name = "otp", nullable = true)
    var otp: String? = null,
)
