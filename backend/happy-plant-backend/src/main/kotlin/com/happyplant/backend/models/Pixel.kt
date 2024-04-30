package com.happyplant.backend.models

import com.happyplant.backend.models.types.LightingType
import com.happyplant.backend.models.Room
import jakarta.persistence.*
import java.util.*

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
        val lightingType: LightingType,

        @ManyToOne @JoinColumn(name = "room_id")
        val room: Room,

        @OneToMany(cascade=[CascadeType.ALL], mappedBy = "pixel")
        val plants: ArrayList<Plant>
) {

        // Methods

        fun placePlant(plant: Plant)
        {
                //TODO: Implement
        }

        fun removePlant(plant: Plant)
        {
                //TODO: Implement
        }
}
