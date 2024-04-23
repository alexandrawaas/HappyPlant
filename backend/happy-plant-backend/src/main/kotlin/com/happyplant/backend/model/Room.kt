package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="rooms")
data class Room(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        @Column val name: String,
        @OneToMany(cascade= [CascadeType.ALL], mappedBy = "room") val grid: ArrayList<Pixel>
)
{
        // Getters

        fun getId(): UUID {
                return id
        }

        fun getName(): String {
                return name
        }

        fun getGrid(): ArrayList<Pixel> {
                return grid
        }
}