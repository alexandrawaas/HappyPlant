package com.happyplant.backend.controller


import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import com.happyplant.backend.datatransfer.species.asDtoResponse
import com.happyplant.backend.service.SpeciesService
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@RequestMapping("species")
class SpeciesController (private val service: SpeciesService){
    @GetMapping
    @ResponseBody
    fun getSpecies(@RequestParam(name = "search") search: String?): List<SpeciesDtoResponse> =
        if(search == null)
            service.getSpecies().map { it.asDtoResponse() }
        else
            service.getSpeciesFiltered(search).map { it.asDtoResponse() }

    @GetMapping("/{speciesId}")
    @ResponseBody
    fun getPlant(@PathVariable speciesId: UUID): SpeciesDtoResponse =
        service.getSpecies(speciesId).asDtoResponse()
}
