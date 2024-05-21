package com.happyplant.backend.controller


import com.happyplant.backend.datatransfer.species.SpeciesDtoResponse
import com.happyplant.backend.datatransfer.species.asDtoResponse
import com.happyplant.backend.service.SpeciesService
import org.springframework.hateoas.EntityModel
import org.springframework.hateoas.server.mvc.linkTo
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@RequestMapping("species")
class SpeciesController (private val service: SpeciesService){
    @GetMapping
    @ResponseBody
    fun getSpecies(@RequestParam(name = "search") search: String?): List<SpeciesDtoResponse> {
        val species = if (search.isNullOrBlank()) {
            service.getSpecies()
        } else {
            service.getSpeciesFiltered(search)
        }
        return species.map { it.asDtoResponse() }
    }

    @GetMapping("/{speciesId}")
    @ResponseBody
    fun getPlant(@PathVariable speciesId: UUID): EntityModel<SpeciesDtoResponse> {
        val speciesDtoResponse: SpeciesDtoResponse = service.getSpecies(speciesId).asDtoResponse()
        return EntityModel.of(
            speciesDtoResponse,
            linkTo<ImageController> {getImage(null, speciesDtoResponse.imageId)}.withRel { "image" }
        )
    }
}
