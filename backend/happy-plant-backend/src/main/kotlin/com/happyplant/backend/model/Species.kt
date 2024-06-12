package com.happyplant.backend.model

import com.happyplant.backend.model.Needs
import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "species")
data class Species(
    @Id @GeneratedValue(strategy = GenerationType.UUID) val id: UUID = UUID.randomUUID(),
    @Column var name: String,
    @Column var latinName: String,
    @Column var imageId: UUID,
    @Column var family: String,
    @Column var description: String,
    @ManyToOne(cascade = [CascadeType.ALL]) @JoinColumn(name = "needs_id") var needs: Needs,
)
