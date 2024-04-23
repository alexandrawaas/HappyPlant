package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*
import java.time.LocalDateTime

@Entity
@Table(name="assignments")
data class Assignment(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        @Column var lastDone: LocalDateTime?,
        @ManyToOne() val plant: Plant
)
{
        // Getters and Setters

        fun getId(): UUID {
                return id
        }

        fun getLastDone(): LocalDateTime? {
                return lastDone
        }

        fun setLastDone(lastDone: LocalDateTime?) {
                this.lastDone = lastDone
        }

        fun getPlant(): Plant {
                return plant
        }
}