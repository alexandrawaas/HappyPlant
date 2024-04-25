package com.happyplant.backend.model

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name="species")
data class Species(
        @Id @GeneratedValue(strategy = GenerationType.UUID) private val id: UUID = UUID.randomUUID(),
        @Column private var name: String,
        @Column private var latinName: String,
        @Column private var picturePath: String,
        @Column private var family: String,
        @Column private var description: String,
        @OneToOne() @JoinColumn(referencedColumnName = "id") var needs: Needs,
) {
}
