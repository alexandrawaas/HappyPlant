package com.happyplant.backend.model

data class Species(
        val name: String,
        val latinName: String,
        val picturePath: String,
        val family: String,
        val description: String,
        val needs: Needs,
) {
}