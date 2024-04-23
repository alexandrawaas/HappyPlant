package com.happyplant.backend.model

import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="needs")
data class Needs(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        @Column var intervals: Map<AssignmentType, Int>,
        @Column var lightingType: LightingType?,
        @OneToOne val plant: Plant,  // muss das weg?
        @OneToOne val species: Species
) {
        // Getters and Setters

        fun getId(): UUID {
                return id
        }

        fun getIntervals(): Map<AssignmentType, Int> {
                return intervals
        }

        fun setIntervals(intervals: Map<AssignmentType, Int>) {
                this.intervals = intervals
        }

        fun getLightingType(): LightingType? {
                return lightingType
        }


        //Methods

        fun addNeed(assignmentType: AssignmentType, interval: Int)
        {
                //TODO: Implement
        }

        fun getInterval(assignmentType: AssignmentType): Int
        {
              //TODO: Implement
                return 0
        }
}