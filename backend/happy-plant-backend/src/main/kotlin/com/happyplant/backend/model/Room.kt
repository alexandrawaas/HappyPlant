package com.happyplant.backend.model

import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import java.awt.Dimension
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

        @Column
        val sizeX: Int,

        @Column
        val sizeY: Int,

        @ManyToOne()
        val user: User
)
{
        // Constructor
        constructor(
                name: String,
                user: User,
                ratioValueX: Int,
                ratioValueY: Int,
        ) : this(UUID.randomUUID(), name, mutableListOf(), sizeX=ratioValueX, sizeY=ratioValueY, user) {
                for (x in 0 until ratioValueX) {
                        for (y in 0 until ratioValueY) {
                                grid.add(Pixel(this, x, y)) // TODO: change to actual logic
                        }
                }
        }


        // Methods

        fun storeWindows(windowPixels: List<Pixel>) {
                windowPixels.forEach { it.isWindow = true }

                var light = LightingType.FULL_SUN;
                for(i in 0..2) {
                        windowPixels
                                .flatMap { it.getCoordinatesForManhattanDistance(i) }
                                .onEach { println("manhattan distance: $i, pixel: $it") }
                                .filter { pair -> pair.x in 0..<sizeX && pair.y in 0..<sizeY }
                                .map { getPixel(it.x, it.y) }
                                .onEach { it.lightingType += light }
                        light--
                }
        }

        fun placePlant(plant: Plant, x: Int, y : Int)
        {
                //TODO: Implement
        }

        fun Room(x: Int, y: Int) {
                //TODO: Implement
        }

        fun getPixel(x: Int, y: Int): Pixel =
                grid[x*sizeY + y]
}
