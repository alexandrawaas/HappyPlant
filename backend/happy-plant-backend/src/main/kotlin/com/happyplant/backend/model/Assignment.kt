package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.UUID
import java.time.LocalDateTime

@Entity
@Table(name="assignments")
data class Assignment(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @Column private var lastDone: LocalDateTime?,
        @ManyToOne() private val plant: Plant
)
{
        // Methods

        fun completeAssignment()
        {
                //TODO: Implement
        }

        fun completeAssignment(date: LocalDateTime)
        {
                //TODO: Implement
        }

        fun isActive(interval: Int): Boolean
        {
                //TODO: Implement
                return false
        }
}
