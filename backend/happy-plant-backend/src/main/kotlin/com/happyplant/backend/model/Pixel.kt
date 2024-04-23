package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="pixels")
data class Pixel(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        @Column val x: Int,
        @Column val y: Int,
        @Column var isWindow: Boolean,
        @ManyToOne() @JoinColumn(name = "id") val room: Room
) {
        // Getters and Setters

        fun getId(): UUID {
                return id
        }

        fun getX(): Int {
                return x
        }

        fun getY(): Int {
                return y
        }

        fun isWindow(): Boolean {
                return isWindow
        }

        fun setWindow(window: Boolean) {
                this.isWindow = window
        }

        fun getRoom(): Room {
                return room
        }
}