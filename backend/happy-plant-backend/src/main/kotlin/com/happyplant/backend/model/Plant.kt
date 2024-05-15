package com.happyplant.backend.model

import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import org.jetbrains.annotations.NotNull
import java.time.LocalDateTime
import java.util.*

@Entity
@Table(name="plants")
data class Plant(
    @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
    @NotNull var name: String,
    @NotNull var picturePath: String = "DefaultPicturePath",
    @Column var notes: String?,
    @OneToMany(cascade = [CascadeType.ALL]) var assignments: Map<AssignmentType, Assignment>,
    @ManyToOne var species: Species,
    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "user_id", referencedColumnName = "id") var user: User,
    @ManyToOne @JoinColumn(name = "pixel_id") var pixel: Pixel?,
    @ManyToOne(cascade = [CascadeType.ALL]) @JoinColumn(name = "needs_id") var needs: Needs?,
) {
        // Methods

        private fun getNeedInterval(assignmentType: AssignmentType): Int =
                needs?.getInterval(assignmentType) ?: Needs.EMPTY_INTERVAL

        fun getLightingType(): LightingType? =
                needs?.lightingType

        fun getActiveAssignments(): Map<AssignmentType, Assignment> =
                assignments.filter { (assignmentType, assignment) ->
                        assignment.isActive(getNeedInterval(assignmentType))
                }

        fun getAllAssignments(): List<Assignment> =
                ArrayList(assignments.values)

        fun addAssignment(assignmentType: AssignmentType, lastDone: LocalDateTime?) {
            val newAssignments = assignments.toMutableMap()
            newAssignments[assignmentType] = Assignment(lastDone = lastDone, plant = this)
            assignments = newAssignments
        }

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
            pixel: Pixel? = null,
            needs: Needs,
        ) : this(UUID.randomUUID(), name, picturePath, notes, mutableMapOf(), species, user, pixel, needs) {
            this.needs?.intervals?.keys?.forEach { assignmentType ->
                this.addAssignment(assignmentType, null)
            }
        }

}
