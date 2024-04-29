package com.happyplant.backend.model

import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="pixels")
data class Pixel(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @Column private val x: Int,
        @Column private val y: Int,
        @Column private var isWindow: Boolean,
        @Column private val lightingType: LightingType,
        @ManyToOne() @JoinColumn(name = "room_id") private val room: Room,
        @OneToMany(cascade=[CascadeType.ALL], mappedBy = "pixel") private val plants: ArrayList<Plant>
) {

        // Methods

        fun setWindow(window: Boolean) {
                this.isWindow = window
                //TODO: Implement
        }

        fun placePlant(plant: Plant)
        {
                //TODO: Implement
        }

        fun removePlant(plant: Plant)
        {
                //TODO: Implement
        }
}
