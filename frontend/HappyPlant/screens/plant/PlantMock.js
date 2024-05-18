class PlantDtoResponse {
    constructor(id, name, picturePath, notes, room, hasOptimalLightingCondition, species, needs, assignments) {
        Object.assign(this, {id, name, picturePath, notes, room, hasOptimalLightingCondition, species, needs, assignments})
    }
}

let ROOM_TYPE;
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

export const plantMock = [
	{
	"id": "77ce460c-9dc3-463a-89a9-3b2a3803752e",
	"name": "Gloria",
	"picturePath": "gloria.jpg",
	"notes": "Hat einen Kälteschaden. Nur gießen wenn trocken!",
	"room": {
	"id": "b91204c5-9250-42be-8745-3eb76d17ad02",
		"name": "Wohnzimmer",
		"category": "LIVING_ROOM"
	},
"hasOptimalLightingCondition": false,
	"species": {
	"id": "11b60b20-8a12-4027-9534-4e92391a7e02",
		"name": "Schmetterlingsorchidee",
		"latinName": "Phalaenopsis",
		"picturePath": "butterfly_orchid.jpg",
		"family": "Orchidaceae",
		"description": "Schmetterlingsorchideen haben elegante, sich bogenförmig erstreckende Blütentrauben, die Schmetterlingen ähneln. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
		"needs": {
		"id": "4693f139-c10c-4e2a-8fee-2b340feee569",
			"lightingType": "PART_SHADE",
			"intervals": {
			"CUTTING": 90,
				"WATERING": 7,
				"REPOTTING": 365,
				"FERTILIZING": 30
		}
	}
},
"needs": {
	"id": "be7c083d-156e-442a-9aee-46c77836bfdb",
		"lightingType": "PART_SHADE",
		"intervals": {
		"REPOTTING": 150,
			"WATERING": 21
	}
},
"assignments": [
	{
		"id": "30f1935a-bfdf-4ac4-a0a4-8cd951bad433",
		"assignmentType": "REPOTTING",
		"lastDone": null,
		"plantId": "77ce460c-9dc3-463a-89a9-3b2a3803752e",
		"plantName": "Gloria"
	},
	{
		"id": "e17f28b4-563c-442a-822d-41079c96c7da",
		"assignmentType": "WATERING",
		"lastDone": null,
		"plantId": "77ce460c-9dc3-463a-89a9-3b2a3803752e",
		"plantName": "Gloria"
	}
]
},

{
	"id": "885e9fdc-1f37-41bc-9861-842be1b54074",
	"name": "Bob",
	"picturePath": "bob.jpg",
	"notes": "Geschenk von meiner Oma",
	"room": {
	"id": "ead0fe8b-c11c-4359-9f07-0df242b8bf3a",
		"name": "Küche",
		"category": "KITCHEN"
},
	"hasOptimalLightingCondition": false,
	"species": {
	"id": "2be6b42b-78e8-4c4c-8230-678fe08a90f5",
		"name": "Aloe Vera",
		"latinName": "Aloe vera",
		"picturePath": "aloe_vera.jpg",
		"family": "Asphodelaceae",
		"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
		"needs": {
		"id": "e92383eb-cfc7-486f-a9c3-ce56692ab4b0",
			"lightingType": "FULL_SUN",
			"intervals": {
			"CUTTING": 365,
				"WATERING": 21,
				"REPOTTING": 365,
				"FERTILIZING": 60
		}
	}
},
	"needs": {
	"id": "6695eefa-0b3d-4ce0-a5e0-58ce611f546d",
		"lightingType": "FULL_SUN",
		"intervals": {
		"CUTTING": 365,
			"WATERING": 21,
			"REPOTTING": 365,
			"FERTILIZING": 60
	}
},
	"assignments": [
	{
		"id": "4cc5d9e1-fedd-43f6-b00c-e39d32476612",
		"assignmentType": "CUTTING",
		"lastDone": null,
		"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"plantName": "Bob"
	},
	{
		"id": "5d2869a8-48dd-40b6-9522-69a84aa91c50",
		"assignmentType": "WATERING",
		"lastDone": null,
		"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"plantName": "Bob"
	},
	{
		"id": "343a7af9-6e4e-4d9c-9952-042f02924cf5",
		"assignmentType": "REPOTTING",
		"lastDone": null,
		"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"plantName": "Bob"
	},
	{
		"id": "20ab5a08-716e-415f-b910-7043d1762405",
		"assignmentType": "FERTILIZING",
		"lastDone": null,
		"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"plantName": "Bob"
	}
]
},

	{
		"id": "885e9fdc-1f37-41bc-9861-842be1b54064",
		"name": "Gottfried-Heinrich-Anton",
		"picturePath": "bob.jpg",
		"notes": "Geschenk von meiner Oma",
		"room": {
			"id": "ead0fe8b-c11c-4359-9f07-0df242b8bf3a",
			"name": "Küche",
			"category": "KITCHEN"
		},
		"hasOptimalLightingCondition": false,
		"species": {
			"id": "2be6b42b-78e8-4c4c-8230-678fe08a90f5",
			"name": "Aloe Vera",
			"latinName": "Aloe vera",
			"picturePath": "aloe_vera.jpg",
			"family": "Asphodelaceae",
			"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
			"needs": {
				"id": "e92383eb-cfc7-486f-a9c3-ce56692ab4b0",
				"lightingType": "FULL_SUN",
				"intervals": {
					"CUTTING": 365,
					"WATERING": 21,
					"REPOTTING": 365,
					"FERTILIZING": 60
				}
			}
		},
		"needs": {
			"id": "6695eefa-0b3d-4ce0-a5e0-58ce611f546d",
			"lightingType": "FULL_SUN",
			"intervals": {
				"CUTTING": 365,
				"WATERING": 21,
				"REPOTTING": 365,
				"FERTILIZING": 60
			}
		},
		"assignments": [
			{
				"id": "4cc5d9e1-fedd-43f6-b00c-e39d32476612",
				"assignmentType": "CUTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Gottfried-Heinrich-Anton"
			},
			{
				"id": "5d2869a8-48dd-40b6-9522-69a84aa91c50",
				"assignmentType": "WATERING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Gottfried-Heinrich-Anton"
			},
			{
				"id": "343a7af9-6e4e-4d9c-9952-042f02924cf5",
				"assignmentType": "REPOTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Gottfried-Heinrich-Anton"
			},
			{
				"id": "20ab5a08-716e-415f-b910-7043d1762405",
				"assignmentType": "FERTILIZING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Gottfried-Heinrich-Anton"
			}
		]
	},

	{
		"id": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"name": "Bob",
		"picturePath": "bob.jpg",
		"notes": "Geschenk von meiner Oma",
		"room": {
			"id": "ead0fe8b-c11c-4359-9f07-0df242b8bf3a",
			"name": "Küche",
			"category": "KITCHEN"
		},
		"hasOptimalLightingCondition": false,
		"species": {
			"id": "2be6b42b-78e8-4c4c-8230-678fe08a90f5",
			"name": "Aloe Vera",
			"latinName": "Aloe vera",
			"picturePath": "aloe_vera.jpg",
			"family": "Asphodelaceae",
			"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
			"needs": {
				"id": "e92383eb-cfc7-486f-a9c3-ce56692ab4b0",
				"lightingType": "FULL_SUN",
				"intervals": {
					"CUTTING": 365,
					"WATERING": 21,
					"REPOTTING": 365,
					"FERTILIZING": 60
				}
			}
		},
		"needs": {
			"id": "6695eefa-0b3d-4ce0-a5e0-58ce611f546d",
			"lightingType": "FULL_SUN",
			"intervals": {
				"CUTTING": 365,
				"WATERING": 21,
				"REPOTTING": 365,
				"FERTILIZING": 60
			}
		},
		"assignments": [
			{
				"id": "4cc5d9e1-fedd-43f6-b00c-e39d32476612",
				"assignmentType": "CUTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "5d2869a8-48dd-40b6-9522-69a84aa91c50",
				"assignmentType": "WATERING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "343a7af9-6e4e-4d9c-9952-042f02924cf5",
				"assignmentType": "REPOTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "20ab5a08-716e-415f-b910-7043d1762405",
				"assignmentType": "FERTILIZING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			}
		]
	},

	{
		"id": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"name": "Bob",
		"picturePath": "bob.jpg",
		"notes": "Geschenk von meiner Oma",
		"room": {
			"id": "ead0fe8b-c11c-4359-9f07-0df242b8bf3a",
			"name": "Küche",
			"category": "KITCHEN"
		},
		"hasOptimalLightingCondition": false,
		"species": {
			"id": "2be6b42b-78e8-4c4c-8230-678fe08a90f5",
			"name": "Aloe Vera",
			"latinName": "Aloe vera",
			"picturePath": "aloe_vera.jpg",
			"family": "Asphodelaceae",
			"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
			"needs": {
				"id": "e92383eb-cfc7-486f-a9c3-ce56692ab4b0",
				"lightingType": "FULL_SUN",
				"intervals": {
					"CUTTING": 365,
					"WATERING": 21,
					"REPOTTING": 365,
					"FERTILIZING": 60
				}
			}
		},
		"needs": {
			"id": "6695eefa-0b3d-4ce0-a5e0-58ce611f546d",
			"lightingType": "FULL_SUN",
			"intervals": {
				"CUTTING": 365,
				"WATERING": 21,
				"REPOTTING": 365,
				"FERTILIZING": 60
			}
		},
		"assignments": [
			{
				"id": "4cc5d9e1-fedd-43f6-b00c-e39d32476612",
				"assignmentType": "CUTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "5d2869a8-48dd-40b6-9522-69a84aa91c50",
				"assignmentType": "WATERING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "343a7af9-6e4e-4d9c-9952-042f02924cf5",
				"assignmentType": "REPOTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "20ab5a08-716e-415f-b910-7043d1762405",
				"assignmentType": "FERTILIZING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			}
		]
	},


	{
		"id": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"name": "Bob",
		"picturePath": "bob.jpg",
		"notes": "Geschenk von meiner Oma",
		"room": {
			"id": "ead0fe8b-c11c-4359-9f07-0df242b8bf3a",
			"name": "Küche",
			"category": "KITCHEN"
		},
		"hasOptimalLightingCondition": false,
		"species": {
			"id": "2be6b42b-78e8-4c4c-8230-678fe08a90f5",
			"name": "Aloe Vera",
			"latinName": "Aloe vera",
			"picturePath": "aloe_vera.jpg",
			"family": "Asphodelaceae",
			"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
			"needs": {
				"id": "e92383eb-cfc7-486f-a9c3-ce56692ab4b0",
				"lightingType": "FULL_SUN",
				"intervals": {
					"CUTTING": 365,
					"WATERING": 21,
					"REPOTTING": 365,
					"FERTILIZING": 60
				}
			}
		},
		"needs": {
			"id": "6695eefa-0b3d-4ce0-a5e0-58ce611f546d",
			"lightingType": "FULL_SUN",
			"intervals": {
				"CUTTING": 365,
				"WATERING": 21,
				"REPOTTING": 365,
				"FERTILIZING": 60
			}
		},
		"assignments": [
			{
				"id": "4cc5d9e1-fedd-43f6-b00c-e39d32476612",
				"assignmentType": "CUTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "5d2869a8-48dd-40b6-9522-69a84aa91c50",
				"assignmentType": "WATERING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "343a7af9-6e4e-4d9c-9952-042f02924cf5",
				"assignmentType": "REPOTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "20ab5a08-716e-415f-b910-7043d1762405",
				"assignmentType": "FERTILIZING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			}
		]
	},


	{
		"id": "885e9fdc-1f37-41bc-9861-842be1b54074",
		"name": "Bob",
		"picturePath": "bob.jpg",
		"notes": "Geschenk von meiner Oma",
		"room": {
			"id": "ead0fe8b-c11c-4359-9f07-0df242b8bf3a",
			"name": "Küche",
			"category": "KITCHEN"
		},
		"hasOptimalLightingCondition": false,
		"species": {
			"id": "2be6b42b-78e8-4c4c-8230-678fe08a90f5",
			"name": "Aloe Vera",
			"latinName": "Aloe vera",
			"picturePath": "aloe_vera.jpg",
			"family": "Asphodelaceae",
			"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
			"needs": {
				"id": "e92383eb-cfc7-486f-a9c3-ce56692ab4b0",
				"lightingType": "FULL_SUN",
				"intervals": {
					"CUTTING": 365,
					"WATERING": 21,
					"REPOTTING": 365,
					"FERTILIZING": 60
				}
			}
		},
		"needs": {
			"id": "6695eefa-0b3d-4ce0-a5e0-58ce611f546d",
			"lightingType": "FULL_SUN",
			"intervals": {
				"CUTTING": 365,
				"WATERING": 21,
				"REPOTTING": 365,
				"FERTILIZING": 60
			}
		},
		"assignments": [
			{
				"id": "4cc5d9e1-fedd-43f6-b00c-e39d32476612",
				"assignmentType": "CUTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "5d2869a8-48dd-40b6-9522-69a84aa91c50",
				"assignmentType": "WATERING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "343a7af9-6e4e-4d9c-9952-042f02924cf5",
				"assignmentType": "REPOTTING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			},
			{
				"id": "20ab5a08-716e-415f-b910-7043d1762405",
				"assignmentType": "FERTILIZING",
				"lastDone": null,
				"plantId": "885e9fdc-1f37-41bc-9861-842be1b54074",
				"plantName": "Bob"
			}
		]
	},
{
	"id": "da203647-0d96-425f-ba69-5e60942ad2f4",
	"name": "Dieter",
	"picturePath": "dieter.jpg",
	"notes": "Hatte 2021 Spinnmilben",
	"room": null,
	"hasOptimalLightingCondition": false,
	"species": {
	"id": "f506a2b1-bbfc-4aaa-9bec-e5cc461fc1cf",
		"name": "Schlangenpflanze",
		"latinName": "Sansevieria",
		"picturePath": "snake_plant.jpg",
		"family": "Spargelgewächse",
		"description": "Auch bekannt als Schwiegermutterzunge, sind Schlangenpflanzen für ihre Robustheit und luftreinigenden Fähigkeiten bekannt.",
		"needs": {
		"id": "fd549eab-c524-4c3c-8636-b963c507d040",
			"lightingType": "FULL_SHADE",
			"intervals": {
			"CUTTING": 365,
				"WATERING": 14,
				"REPOTTING": 730,
				"FERTILIZING": 30
		}
	}
},
	"needs": {
	"id": "d1935979-60a7-440c-b75e-d548517f9da8",
		"lightingType": "FULL_SHADE",
		"intervals": {
		"CUTTING": 365,
			"WATERING": 14,
			"FERTILIZING": 30
	}
},
	"assignments": [
	{
		"id": "fe7a6990-7dbe-4721-a3a4-2f74227bda76",
		"assignmentType": "CUTTING",
		"lastDone": null,
		"plantId": "da203647-0d96-425f-ba69-5e60942ad2f4",
		"plantName": "Dieter"
	},
	{
		"id": "2b7a747a-1228-4732-92b1-d117c6b177bd",
		"assignmentType": "WATERING",
		"lastDone": null,
		"plantId": "da203647-0d96-425f-ba69-5e60942ad2f4",
		"plantName": "Dieter"
	},
	{
		"id": "6cb2beb5-5666-4868-a1c1-c837e8257362",
		"assignmentType": "FERTILIZING",
		"lastDone": null,
		"plantId": "da203647-0d96-425f-ba69-5e60942ad2f4",
		"plantName": "Dieter"
	}
]
}
]