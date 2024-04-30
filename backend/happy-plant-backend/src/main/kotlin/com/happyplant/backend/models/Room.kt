package com.happyplant.backend.models

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="rooms")
data class Room(
        @Id @GeneratedValue(strategy = GenerationType.UUID)
        val id: UUID = UUID.randomUUID(),

        @Column
        val name: String,

        @OneToMany(cascade=[CascadeType.ALL], mappedBy = "room")
        val grid: MutableList<Pixel>,

        @ManyToOne()
        val user: User
)
{
        // Constructor
        constructor(name: String, user: User, x: Int, y: Int) : this(UUID.randomUUID(), name, mutableListOf(), user) {
                for (_x in 0 until x) {
                        for (_y in 0 until y) {
                                grid.add(Pixel(this, _x, _y))
                        }
                }
        }


        // Methods

        fun placePlant(plant: Plant, x: Int, y : Int)
        {
                //TODO: Implement
        }

        fun Room(x: Int, y: Int) {
                //TODO: Implement
        }

        fun getPixel(x: Int, y: Int): Pixel?
        {
                //TODO: Implement
                return null
        }
}
