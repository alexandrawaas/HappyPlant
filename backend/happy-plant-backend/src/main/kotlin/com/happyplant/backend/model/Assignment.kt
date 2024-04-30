package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.UUID
import java.time.LocalDateTime
import java.time.LocalTime

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
                lastDone = LocalDateTime.now()
        }

        fun completeAssignment(date: LocalDateTime)
        {
                lastDone = date
        }

        fun isActive(interval: Int): Boolean
        {
                // -1 means intervall is null, e.g. plant does not have AssignmentType
                if (interval == Needs.EMPTY_INTERVAL) return false

                val now = LocalDateTime.now().with(LocalTime.MIDNIGHT)
                return lastDone?.plusDays(interval.toLong())?.isBefore(now) ?: true
                        || lastDone?.plusDays(interval.toLong())?.isEqual(now) ?: true
        }

        fun getNextDue(interval: Int): LocalDateTime
        {
                return lastDone?.plusDays(interval.toLong()) ?: LocalDateTime.now()
        }
}