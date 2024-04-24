package com.happyplant.backend.controllers


import com.happyplant.backend.model.Species
import com.happyplant.backend.services.PlantsService
import com.happyplant.backend.services.SpeciesService
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("species")
class SpeciesController (private val service: SpeciesService){
    @GetMapping
    @ResponseBody
    fun getSpecies(): List<Species> = service.getSpecies()

    @GetMapping("/{speciesId}")
    @ResponseBody
    fun getPlant(@PathVariable speciesId: Long): Species = service.getSpecies(speciesId)
}