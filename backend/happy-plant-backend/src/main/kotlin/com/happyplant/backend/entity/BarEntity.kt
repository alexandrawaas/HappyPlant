package com.happyplant.backend.entity

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name="bars")
data class BarEntity(
    @Id var id: UUID = UUID.randomUUID(),
    @Column val name: String,

    @ManyToMany(mappedBy = "bars")
    private val foos: MutableList<FooEntity> = mutableListOf()
)
