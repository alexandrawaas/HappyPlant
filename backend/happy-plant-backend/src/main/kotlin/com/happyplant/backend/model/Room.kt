package com.happyplant.backend.model

import com.happyplant.backend.model.types.LightingType
import com.happyplant.backend.model.types.RoomCategory
import jakarta.persistence.*
import java.util.*
import java.util.function.Function

@Entity
@Table(name="rooms")
data class Room(
        @Id @GeneratedValue(strategy = GenerationType.UUID)
        val id: UUID = UUID.randomUUID(),

        @Column
        val name: String,

        @Column
        val category: RoomCategory = RoomCategory.OTHER,

        @OneToMany(cascade=[CascadeType.ALL], mappedBy = "room")
        val grid: MutableList<Pixel>,

        @Column
        val sizeX: Int,

        @Column
        val sizeY: Int,

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "user_id", referencedColumnName = "id")
        val user: User
)
{
        // Static helper
        companion object {
                fun getVirtualIndex(x: Int, y: Int, maxX: Int, maxY: Int) : Int =
                        x*maxY + y
        }

        // Constructor
        constructor(
                name: String,
                category: RoomCategory,
                user: User,
                ratioValueX: Int,
                ratioValueY: Int,
        ) : this(UUID.randomUUID(), name, category, mutableListOf(), sizeX=ratioValueX, sizeY=ratioValueY, user) {
                for (x in 0 until ratioValueX) {
                        for (y in 0 until ratioValueY) {
                                grid.add(Pixel(this, x, y))
                        }
                }
        }


        // Methods

        fun storeWindows(windowPixels: List<Pixel>) {
                // clear already set windows
                grid.forEach {
                        it.isWindow = false
                        it.lightingType = LightingType.FULL_SHADE
                }

                windowPixels
                        .map { getPixel(it.x, it.y) }
                        .forEach { it.isWindow = true }

                var light = LightingType.FULL_SUN
                for(i in 0..2) {
                        windowPixels
                                .flatMap { it.getCoordinatesForManhattanDistance(i) }
                                .filter { pair -> pair.x in 0..<sizeX && pair.y in 0..<sizeY }
                                .map { getPixel(it.x, it.y) }
                                .forEach { it.lightingType += light }
                        light--
                }
        }

        private fun printGrid(detail: Function<Pixel, String>) {
                for(y in 0..<sizeY) {
                        for(x in 0..<sizeX) {
                                print("${detail.apply(getPixel(x, y))},")
                        }
                        println()
                }
        }

        fun placePlant(plant: Plant, x: Int, y : Int) : Boolean  =
                getPixel(x, y).placePlant(plant)

        fun getPixel(x: Int, y: Int): Pixel =
                grid[getVirtualIndex(x,y,sizeX,sizeY)]
}
