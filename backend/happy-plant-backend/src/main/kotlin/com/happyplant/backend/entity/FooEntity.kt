package com.happyplant.backend.entity

import jakarta.persistence.*
import java.util.UUID


@Entity
@Table(name="foos")
data class FooEntity(
    @Id var id: UUID = UUID.randomUUID(),
    @Column(name="name") val name: String,

    @ManyToMany @JoinTable(
        name = "foos_bars",
        joinColumns = [JoinColumn(name = "foo_id")],
        inverseJoinColumns = [JoinColumn(name = "bar_id")]
    )
    val bars: List<BarEntity> = mutableListOf()
)

// val List<MuscleGroup>, val List<Category>