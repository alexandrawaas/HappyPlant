class RoomDtoResponse {
    constructor(id, name, category, plants, warnings, assignments) {
        Object.assign(this, {id, name, category, plants, warnings, assignments})
    }
}

ROOM_TYPE = [
    "LIVING_ROOM",
    "KITCHEN",
    "BATHROOM",
    "BEDROOM",
    "OFFICE",
    "HALLWAY",
    "BALCONY",
    "GREENHOUSE",
    "OTHER",
]

export const roomMock = [
    new RoomDtoResponse(1, "Wohnzimmer", "LIVING_ROOM", 4, 3, 2),
    new RoomDtoResponse(2, "Schlafzimmer", "BEDROOM", 1, 0, 0),
    new RoomDtoResponse(3, "Badezimmer", "BATHROOM", 2, 0, 0),
    new RoomDtoResponse(4, "Küche", "KITCHEN", 10, 1, 0),
    new RoomDtoResponse(5, "Büro", "OFFICE", 1, 0, 2),
    new RoomDtoResponse(6, "Flur", "HALLWAY", 1, 0, 2),
    new RoomDtoResponse(7, "Balkon", "BALCONY", 1, 0, 2),
    new RoomDtoResponse(8, "Gewächshaus", "GREENHOUSE", 1, 0, 2),
    new RoomDtoResponse(9, "Begehbarer Kleiderschrank", "OTHER", 1, 0, 2),
]