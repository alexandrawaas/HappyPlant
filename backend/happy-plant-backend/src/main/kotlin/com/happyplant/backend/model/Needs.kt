package com.happyplant.backend.model

import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import org.springframework.boot.context.properties.bind.Bindable.mapOf
import java.util.*

@Entity
@Table(name="needs")
data class Needs(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @ElementCollection @CollectionTable private var intervals: Map<AssignmentType, Int?>,
        @Column private var lightingType: LightingType?
) {
        companion object{
                const val EMPTY_INTERVAL = -1
        }


        //Methods

        fun addOrReplaceNeed(assignmentType: AssignmentType, interval: Int)
        {
                intervals = intervals + mapOf(assignmentType to interval)
        }

        fun getInterval(assignmentType: AssignmentType): Int
        {
                return intervals[assignmentType] ?: EMPTY_INTERVAL
        }
}