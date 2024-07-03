package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "verify_email_otp")
data class VerifyEmailOtp(
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID = UUID.randomUUID(),

    @Column(name = "expires", nullable = true)
    var expires: Long? = null,

    @Column(name = "otp", nullable = true)
    var otp: Int? = null,

    @OneToOne(mappedBy = "verifyEmailOtp")
    var user: User? = null
)
