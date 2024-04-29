package com.happyplant.backend.model

import com.happyplant.backend.model.types.AssignmentType
import com.happyplant.backend.model.types.LightingType
import jakarta.persistence.*
import org.jetbrains.annotations.NotNull
import java.util.*

@Entity
@Table(name="plants")
data class Plant(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @NotNull private var name: String,
        @NotNull private var picturePath: String = "DefaultPicturePath",
        @Column private var notes: String?,
        @OneToMany() private var assignments: Map<AssignmentType, Assignment>,
        @ManyToOne() private var species: Species,
        @ManyToOne() private var user: User,
        @ManyToOne() @JoinColumn(name = "pixel_id") private var pixel: Pixel?,
        @OneToOne() @JoinColumn(referencedColumnName = "id") private var needs: Needs?,
) {
        // Methods

        fun getNeedInterval(assignmentType: AssignmentType): Int?
        {
                //TODO: Implement
                return needs?.getInterval(assignmentType)
        }

        fun getLightingType(): LightingType
        {
                //TODO: Implement
                return LightingType.FULL_SHADE
        }

        fun getActiveAssignments(): List<Assignment>
        {
                //TODO: Implement
                return ArrayList<Assignment>()
        }

        fun getAllAssignments(): List<Assignment>
        {
                //TODO: Implement
                return ArrayList<Assignment>()
        }

        fun isPlaced(): Boolean
        {
                //TODO: Implement
                return false
        }
}
