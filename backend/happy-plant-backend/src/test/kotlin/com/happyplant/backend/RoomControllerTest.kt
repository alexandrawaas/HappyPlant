package com.happyplant.backend

import com.happyplant.backend.datatransfer.room.RoomDtoRequest
import com.happyplant.backend.datatransfer.room.RoomDtoResponse
import com.happyplant.backend.model.Room
import com.happyplant.backend.utility.Coordinate
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
class RoomControllerTest(@Autowired var restTemplate: TestRestTemplate) {
    lateinit var createdRoomResponse : ResponseEntity<RoomDtoResponse>
    var idsToDelete : MutableList<UUID> = mutableListOf()

    val DEFAULT_X_RATIO = 5
    val DEFAULT_Y_RATIO = 4

    @BeforeTest
    fun setup() {
        val roomDtoRequest = RoomDtoRequest("bathroom", DEFAULT_X_RATIO, DEFAULT_Y_RATIO)
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
        val x = 5
        val y = 3
        val roomDtoRequest1 = RoomDtoRequest(room1Name, ratioValueX = x, ratioValueY = y);
        val response = this.restTemplate.postForEntity("/rooms", roomDtoRequest1, RoomDtoResponse::class.java)

        assertTrue { response.body?.name.equals(room1Name) }
        assertTrue { response.body?.grid?.size == x*y }
        val dimensionX = response.body?.grid?.count { it.y == 0 } ?: throw Exception()
        val dimensionY = response.body?.grid?.count { it.x == 0 } ?: throw Exception()
        assertTrue { dimensionX == x }
        assertTrue { dimensionY == y }
        assertTrue { dimensionX / dimensionY == x / y }

        val storedSingle = this.restTemplate.getForEntity("/rooms/{id}", RoomDtoResponse::class.java, response.body?.id)
        assertTrue { storedSingle.body?.name.equals(room1Name) }

        val allStored = this.restTemplate.getForEntity("/rooms", Array<RoomDtoResponse>::class.java)
        assertTrue { allStored.body?.toList()?.any { it.id == response.body?.id } ?: false }

        idsToDelete.add(response.body!!.id)
    }

    @Test
    fun testMarkingPixelsAsWindows() {
        val createdId = createdRoomResponse.body!!.id

        val requestedWindows = listOf(Coordinate(0,1), Coordinate(0,2), Coordinate(2,0), Coordinate(3,0))
            .map { createdRoomResponse?.body?.grid?.find { pxl -> it.x == pxl.x && it.y == pxl.y } }

        this.restTemplate.put("/rooms/{id}/windows", requestedWindows, createdId)

        val room = this.restTemplate.getForEntity("/rooms/{id}", RoomDtoResponse::class.java, createdId)
        assertTrue {
            room.body?.grid?.all {
                it.isWindow == requestedWindows.any { w -> w?.x == it.x && w.y == it.y }
            } ?: false
        }


    }

    @Test
    fun testStoringWindowsOnRoomCorrectlySetsLightingTypes() {
        val createdId = createdRoomResponse.body!!.id
        val windowXYs = listOf(Coordinate(0,1), Coordinate(0,2), Coordinate(2,0), Coordinate(3,0))
        val requestedWindows = createdRoomResponse.body!!.grid.filter {windowXYs.contains(Coordinate(it.x, it.y))}
        this.restTemplate.put("/rooms/{id}/windows", requestedWindows, createdId)

        val room = this.restTemplate.getForEntity("/rooms/{id}", RoomDtoResponse::class.java, createdId)
        val grid = room?.body?.grid
        assertNotNull(grid)

        assertTrue { grid[Room.getVirtualIndex(0,0, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(0,1, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(0,2, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(0,3, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(1,0, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(1,1, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(1,2, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(1,3, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 1 }
        assertTrue { grid[Room.getVirtualIndex(2,0, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(2,1, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(2,2, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 2 }
        assertTrue { grid[Room.getVirtualIndex(2,3, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 0 }
        assertTrue { grid[Room.getVirtualIndex(3,0, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(3,1, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(3,2, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 1 }
        assertTrue { grid[Room.getVirtualIndex(3,3, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 0 }
        assertTrue { grid[Room.getVirtualIndex(4,0, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 3 }
        assertTrue { grid[Room.getVirtualIndex(4,1, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 1 }
        assertTrue { grid[Room.getVirtualIndex(4,2, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 0 }
        assertTrue { grid[Room.getVirtualIndex(4,3, DEFAULT_X_RATIO, DEFAULT_Y_RATIO)].lightingType.ordinal == 0 }

    }

    @Test
    fun testDelete() {
        val createdId = createdRoomResponse.body!!.id

        val deletion = this.restTemplate.delete("/rooms/{id}", createdId)
//        assertTrue { deletion.statusCode == HttpStatus.DELETED }

        val result = this.restTemplate.getForEntity("/rooms/{id}", String::class.java, createdId)
        assertTrue { result.statusCode == HttpStatus.NOT_FOUND }
    }
}