package com.happyplant.backend.model

import com.happyplant.backend.Coordinate
import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import java.util.*
import kotlin.math.abs

@Entity
@Table(name="pixels")
data class Pixel(
        @Id @GeneratedValue(strategy = GenerationType.UUID)
        val id: UUID = UUID.randomUUID(),

        @Column
        val x: Int,

        @Column
        val y: Int,

        @Column
        var isWindow: Boolean,

        @Column
        var lightingType: LightingType,

        @ManyToOne @JoinColumn(name = "room_id")
        val room: Room,

        @OneToMany(cascade=[CascadeType.ALL], mappedBy = "pixel")
        val plants: MutableList<Plant>
) {
        constructor(room: Room, x: Int, y: Int)
                : this(UUID.randomUUID(), x, y,false, LightingType.FULL_SHADE, room, mutableListOf())

        // Methods

        fun getCoordinatesForManhattanDistance(manhattanDistance: Int): List<Coordinate> {
                val coordinates = mutableListOf<Coordinate>()
                for (x in this.x - manhattanDistance..this.x + manhattanDistance) {
                        for (y in this.y - (manhattanDistance - abs(this.x - x))..this.y + (manhattanDistance - abs(this.x - x))) {
                                coordinates.add(Coordinate(x, y))
                        }
                }
                return coordinates
        }

        fun placePlant(plant: Plant) : Boolean {
                plants.add(plant)
                plant.pixel = this
                return plant.getLightingType() == this.lightingType
        }

        fun removePlant(plant: Plant) {
                plants.remove(plant)
                plant.pixel = null
        }
}
