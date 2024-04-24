package com.happyplant.backend.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.util.*

@Entity
class Plant(
        @Id @GeneratedValue(strategy = GenerationType.AUTO) val id: Long,
) {
}