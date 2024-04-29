package com.happyplant.backend.model

import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="needs")
data class Needs(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @ElementCollection @CollectionTable private var intervals: Map<AssignmentType, Int?>,
        @Column private var lightingType: LightingType?
) {

        //Methods

        fun addNeed(assignmentType: AssignmentType, interval: Int)
        {
                //TODO: Implement
        }

        fun getInterval(assignmentType: AssignmentType): Int?
        {
              //TODO: Implement
                return intervals[assignmentType]
        }
}
