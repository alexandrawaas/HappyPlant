package com.happyplant.backend.model

import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "species")
data class Species(
    @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
    @Column var name: String,
    @Column var latinName: String,
    @Column var picturePath: String,
    @Column var family: String,
    @Column var description: String,
    @OneToOne() @JoinColumn(referencedColumnName = "id") var needs: Needs,
)