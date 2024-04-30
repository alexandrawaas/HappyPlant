package com.happyplant.backend

import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import java.util.*
import kotlin.test.*

@SpringBootTest(
    classes = [BackendApplication::class],
    webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
class ExerciseControllerTest(@Autowired var restTemplate: TestRestTemplate) {
    lateinit var createdRoomResponse : ResponseEntity<RoomDtoResponse>
    var idsToDelete : MutableList<UUID> = mutableListOf()

    @BeforeTest
    fun setup() {
        val roomDtoRequest = RoomDtoRequest("bathroom", 3, 5)
        createdRoomResponse = this.restTemplate.postForEntity("/rooms", roomDtoRequest, RoomDtoResponse::class.java)
    }

    @AfterTest
    fun cleanup() {
        this.restTemplate.delete("/rooms/{id}", createdRoomResponse.body!!.id)
        idsToDelete.forEach { this.restTemplate.delete("/rooms/{id}", it) }
    }

    @Test
    fun testCreationResponseAndCorrectStorage() {
        val room1Name = "bathroom"
        val roomDtoRequest1 = RoomDtoRequest(room1Name, 3, 5);
        val response = this.restTemplate.postForEntity("/rooms", roomDtoRequest1, RoomDtoResponse::class.java)

        assertTrue { response.body?.name.equals(room1Name) }
        assertTrue { response.body?.grid?.size == 15 }

        val storedSingle = this.restTemplate.getForEntity("/rooms/{id}", RoomDtoResponse::class.java, response.body?.id)
        assertTrue { storedSingle.body?.name.equals(room1Name) }

        val allStored = this.restTemplate.getForEntity("/rooms", Array<RoomDtoResponse>::class.java)
        assertTrue { allStored.body?.toList()?.any { it.id == response.body?.id } ?: false }

        idsToDelete.add(response.body!!.id)
    }

    @Test
    fun testDelete() {
        val createdId = createdRoomResponse.body!!.id

        this.restTemplate.delete("/rooms/{id}", createdId)

        val result = this.restTemplate.getForEntity("/rooms/{id}", String::class.java, createdId)
        assertTrue { result.statusCode == HttpStatus.NOT_FOUND }
    }
}