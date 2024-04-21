package com.happyplant.backend.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.OneToOne
import java.util.*

@Entity
data class Species(
        @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
        val name: String,
        val latinName: String,
        val picturePath: String,
        val family: String,
        val description: String,
        @OneToOne() @JoinColumn(referencedColumnName = "id") val needs: Needs,
) {
}