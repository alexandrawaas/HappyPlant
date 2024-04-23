package com.happyplant.backend.model

import com.happyplant.backend.model.types.AssignmentType
import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="needs")
data class Needs(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        @Column var intervals: Map<AssignmentType, Int>,
        @OneToOne val plant: Plant,  // muss das weg?
        @OneToOne val species: Species
) {

        // Getters and Setters

        fun getIntervals(): Map<AssignmentType, Int> {
                return intervals
        }

        fun setIntervals(intervals: Map<AssignmentType, Int>) {
                this.intervals = intervals
        }

}