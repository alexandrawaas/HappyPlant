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
        @OneToOne() @JoinColumn(referencedColumnName = "id") var needs: Needs,
) {
        // Getters and Setters

        fun getId(): UUID {
                return id
        }

        fun getName(): String {
                return name
        }

        fun setName(name: String) {
                this.name = name
        }

        fun getPicturePath(): String {
                return picturePath
        }

        fun setPicturePath(picturePath: String) {
                this.picturePath = picturePath
        }

        fun getNotes(): String? {
                return notes
        }

        fun setNotes(notes: String?) {
                this.notes = notes
        }

        fun getAssignments(): Map<AssignmentType, Assignment> {
                return assignments
        }

        fun setAssignments(assignments: Map<AssignmentType, Assignment>) {
                this.assignments = assignments
        }

        fun getSpecies(): Species {
                return species
        }

        fun setSpecies(species: Species) {
                this.species = species
        }

        fun getNeeds(): Needs {
                return needs
        }

        fun setNeeds(needs: Needs) {
                this.needs = needs
        }


        // Methods

        fun getNeedInterval(assignmentType: AssignmentType): Int?
        {
                //TODO: Implement
                return needs.getIntervals().get(assignmentType)
        }

        fun getLightingType(): LightingType?
        {
                //TODO: Implement
                return needs.getLightingType() ?: species.needs.lightingType
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