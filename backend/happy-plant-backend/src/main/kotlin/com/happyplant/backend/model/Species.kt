package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="species")
data class Species(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        @Column var name: String,
        @Column var latinName: String,
        @Column var picturePath: String,
        @Column var family: String,
        @Column var description: String,
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

        fun getLatinName(): String {
                return latinName
        }

        fun setLatinName(latinName: String) {
                this.latinName = latinName
        }

        fun getPicturePath(): String {
                return picturePath
        }

        fun setPicturePath(picturePath: String) {
                this.picturePath = picturePath
        }

        fun getFamily(): String {
                return family
        }

        fun setFamily(family: String) {
                this.family = family
        }

        fun getDescription(): String {
                return description
        }

        fun setDescription(description: String) {
                this.description = description
        }

        fun getNeeds(): Needs {
                return needs
        }

        fun setNeeds(needs: Needs) {
                this.needs = needs
        }
}