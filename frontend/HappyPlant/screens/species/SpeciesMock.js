class SpeciesDtoResponse {
    constructor(id, name, latinName, picturePath, family, description, needs) {
        this.id = id; // integer
        this.name = name; // string
        this.latinName = latinName; // string
        this.picturePath = picturePath; // string
        this.family = family; // string
        this.description = description; // string
        this.needs = needs; // NeedsDtoResponse
    }
}

class NeedsDtoResponse {
    constructor(id, lightingType, intervals) {
        this.id = id; // integer
        this.lightingType = lightingType; // string (enum: full_sun, sun, part_shade, full_shade)
        this.intervals = intervals; // object
    }
}

// Mock intervals for NeedsDtoResponse
const intervals0 = {
    watering: 7,
    cutting: 14,
    fertilizing: 30,
    repotting: 365,
    repositioning: 60
};

const intervals1 = {
    watering: 5,
    cutting: 14,
    fertilizing: 30,
    repotting: 180,
    repositioning: 30
};

const intervals2 = {
    watering: 7,
    cutting: 21,
    fertilizing: 45,
    repotting: 240,
    repositioning: 45
};


export default speciesMock = [
    new SpeciesDtoResponse(10, "butterfly orchid", "phalaenopsis", "/assets/pictures/abcdefg.jpg", "orchids", "lorem ipsum", 
        new NeedsDtoResponse(10, "full_sun", intervals0)
    ),
    new SpeciesDtoResponse(11, "snake plant", "Sansevieria trifasciata", "/assets/pictures/snake_plant.jpg", "Asparagaceae", "Lorem ipsum dolor sit amet.", 
        new NeedsDtoResponse(11, "part_shade", intervals1)
    ),
    new SpeciesDtoResponse(12, "peace lily", "Spathiphyllum wallisii", "/assets/pictures/peace_lily.jpg", "Araceae", "Consectetur adipiscing elit.",
        new NeedsDtoResponse(12, "full_shade", intervals2)
    ),
]