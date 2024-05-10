class RoomDtoResponse {
    constructor(id, name, category, plants, warnings, assignments) {
        Object.assign(this, {id, name, category, plants, warnings, assignments})
    }
}

ROOM_TYPE = [
    "LIVE", "BATH", "COOK", "SLEEP", "OTHER"
]

export const roomMock = [
    new RoomDtoResponse(1, "Wohnzimmer", "LIVE", 4, 3, 2),
    new RoomDtoResponse(2, "Schlafzimmer", "SLEEP", 1, 0, 0),
    new RoomDtoResponse(3, "Badezimmer", "BATH", 2, 0, 0),
    new RoomDtoResponse(4, "Küche", "COOK", 10, 1, 0),
    // new RoomDtoResponse(5, "Büro", "OTHER", 1, 0, 2),
]