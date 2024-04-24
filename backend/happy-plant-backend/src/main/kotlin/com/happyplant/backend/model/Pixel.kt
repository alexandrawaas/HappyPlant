package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="pixels")
data class Pixel(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @Column private val x: Int,
        @Column private val y: Int,
        @Column private var isWindow: Boolean,
        @ManyToOne() @JoinColumn(name = "room_id") private val room: Room
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