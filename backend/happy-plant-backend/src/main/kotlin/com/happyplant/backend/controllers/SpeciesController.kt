package com.happyplant.backend.controllers


import com.happyplant.backend.datatransfer.SpeciesDTO
import com.happyplant.backend.model.Species
import com.happyplant.backend.services.PlantsService
import com.happyplant.backend.services.SpeciesService
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@RequestMapping("species")
class SpeciesController (private val service: SpeciesService){
    @GetMapping
    @ResponseBody
    fun getSpecies(): List<SpeciesDTO> = service.getSpecies()

    @GetMapping("/{speciesId}")
    @ResponseBody
    fun getPlant(@PathVariable speciesId: UUID): SpeciesDTO = service.getSpecies(speciesId)
}