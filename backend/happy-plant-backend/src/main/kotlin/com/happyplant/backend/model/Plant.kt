package com.happyplant.backend.model

import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import org.jetbrains.annotations.NotNull
import java.util.*

@Entity
@Table(name="plants")
data class Plant(
    @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
    @NotNull var name: String,
    @NotNull var picturePath: String = "DefaultPicturePath",
    @Column var notes: String?,
    @OneToMany() var assignments: Map<AssignmentType, Assignment>,
    @ManyToOne() var species: Species,
    @ManyToOne() private var user: User,
    @ManyToOne() @JoinColumn(name = "pixel_id") var pixel: Pixel?,
    @OneToOne() @JoinColumn(referencedColumnName = "id") var needs: Needs?,
) {
        // Methods

        fun getNeedInterval(assignmentType: AssignmentType): Int =
                needs?.getInterval(assignmentType) ?: Needs.EMPTY_INTERVAL

        fun getLightingType(): LightingType? =
                needs?.lightingType

        fun getActiveAssignments(): List<Assignment> =
                assignments.filter { (assignmentType, assignment) ->
                        assignment.isActive(getNeedInterval(assignmentType))
                }.map { it.value }

        fun getAllAssignments(): List<Assignment> =
                ArrayList(assignments.values)

        fun isPlaced(): Boolean =
                pixel != null
}
