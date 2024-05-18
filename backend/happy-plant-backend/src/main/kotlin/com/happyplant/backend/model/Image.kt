package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "imageData")
data class Image(
    @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
    @Lob @Column(name = "imagedata", length = 1000) val imageData: ByteArray,
    @Column val name: String? = null,
    @Column val type: String? = null,
    @Column val userId: UUID? = null,
)