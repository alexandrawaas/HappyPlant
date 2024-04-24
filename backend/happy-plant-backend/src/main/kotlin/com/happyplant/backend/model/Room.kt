package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="rooms")
data class Room(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @Column private val name: String,
        @OneToMany(cascade=[CascadeType.ALL], mappedBy = "room") private val grid: ArrayList<Pixel>,
        @ManyToOne() private val user: User
)
{

        // Methods

        fun placePlant(plant: Plant, x: Int, y : Int)
        {
                //TODO: Implement
        }

        fun Room(x: Int, y: Int) {
                //TODO: Implement
        }
}