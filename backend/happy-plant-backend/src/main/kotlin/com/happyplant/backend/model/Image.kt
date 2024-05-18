package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "imageData")
data class Image(
    @jakarta.persistence.Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
    @Column val userId: UUID? = null,
    @Column val name: String? = null,
    @Column val type: String? = null,
    @Lob @Column(name = "imagedata", length = 1000) val imageData: ByteArray,
)