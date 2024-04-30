package com.happyplant.backend.model

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
        constructor(name: String, user: User, x: Int, y: Int)
                : this(UUID.randomUUID(), name, ArrayList(x*y), user)


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
