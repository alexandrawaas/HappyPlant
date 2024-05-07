package com.happyplant.backend.model

import com.happyplant.backend.datatransfer.assignment.AssignmentDtoRequest
import com.happyplant.backend.datatransfer.assignment.asEntity
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
    @OneToMany(cascade = [CascadeType.ALL]) var assignments: Map<AssignmentType, Assignment>,
    @ManyToOne() var species: Species,
    @ManyToOne() private var user: User,
    @ManyToOne() @JoinColumn(name = "pixel_id") var pixel: Pixel?,
    @ManyToOne(cascade = [CascadeType.ALL]) @JoinColumn(name = "needs_id") var needs: Needs?,
) {
        // Methods

        fun getNeedInterval(assignmentType: AssignmentType): Int =
                needs?.getInterval(assignmentType) ?: Needs.EMPTY_INTERVAL

        fun getLightingType(): LightingType? =
                needs?.lightingType

        fun getActiveAssignments(): Map<AssignmentType, Assignment> =
                assignments.filter { (assignmentType, assignment) ->
                        assignment.isActive(getNeedInterval(assignmentType))
                }

        fun getAllAssignments(): List<Assignment> =
                ArrayList(assignments.values)

        fun isPlaced(): Boolean =
                pixel != null

        fun removeFromRoom() {
            if(isPlaced()) {
                pixel!!.removePlant(this)
            }
        }

        constructor(
            name: String,
            picturePath: String,
            notes: String?,
            species: Species,
            user: User,
            needs: Needs,
            newPlantAssignments: Map<AssignmentType, AssignmentDtoRequest>
        ) : this(UUID.randomUUID(), name, picturePath, notes, mutableMapOf(), species, user, null, needs) {
            val assignments = mutableMapOf<AssignmentType, Assignment>()
            this.needs?.intervals?.forEach {
                assignments[it.key] = Assignment(lastDone = null, plant = this)
            }
            assignments += newPlantAssignments.mapValues { it.value.asEntity(this) }
            this.assignments = assignments.toMap()
    }

}
