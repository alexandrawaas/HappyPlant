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
	{
		"id": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
		"name": "Wohnzimmer",
		"category": "LIVING_ROOM",
		"grid": [
			{
				"id": "01579fa9-61dd-4bf3-bb4b-9670d39127a7",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": [
					{
						"id": "fff5f16b-a29f-4d19-b725-a1408e8a2ca6",
						"name": "Gloria",
						"picturePath": "gloria.jpg",
						"notes": "Hat einen Kälteschaden. Nur gießen wenn trocken!",
						"room": {
							"id": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
							"name": "Wohnzimmer",
							"category": "LIVING_ROOM"
						},
						"hasOptimalLightingCondition": false,
						"species": {
							"id": "8bd67353-296b-4275-92bf-4929c56c0651",
							"name": "Schmetterlingsorchidee",
							"latinName": "Phalaenopsis",
							"picturePath": "butterfly_orchid.jpg",
							"family": "Orchidaceae",
							"description": "Schmetterlingsorchideen haben elegante, sich bogenförmig erstreckende Blütentrauben, die Schmetterlingen ähneln. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
							"needs": {
								"id": "a09e2f73-25e7-43b7-bd3b-7fbb84c2e34c",
								"lightingType": "PART_SHADE",
								"intervals": {
									"CUTTING": 90,
									"FERTILIZING": 30,
									"WATERING": 7,
									"REPOTTING": 365
								}
							}
						},
						"needs": {
							"id": "e600b3e9-a983-4901-b4cd-4950a27fd22c",
							"lightingType": "PART_SHADE",
							"intervals": {
								"REPOTTING": 150,
								"WATERING": 21
							}
						},
						"assignments": [
							{
								"id": "19a3b265-d8c9-4ce3-9872-5a1d4620627f",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "fff5f16b-a29f-4d19-b725-a1408e8a2ca6",
								"plantName": "Gloria"
							},
							{
								"id": "5d5ac903-606c-4037-b813-a5e6c7f8db23",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "fff5f16b-a29f-4d19-b725-a1408e8a2ca6",
								"plantName": "Gloria"
							}
						]
					}
				]
			},
			{
				"id": "640d6735-4301-4c2e-83de-7ad1af2c0979",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "1bd78b6c-1955-4354-b722-f17e097da5d7",
				"x": 0,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "254f25bb-6fe9-4601-83e8-7674fa52e898",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "ae43c01c-1025-4a09-8962-8af0ecf660fd",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "c09b20b0-517f-445f-baa5-ea9d27018e9f",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "ade8250a-9055-4702-a361-bf0db4a02168",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "fb375a5c-e078-4d40-ba1d-3d4447bc480d",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "4503b5d7-219e-43f6-aa29-46a06ebcd83e",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "c06bf087-34cd-49ce-9d86-865dcd4896d2",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "55ed77bc-83c6-44e0-affd-ff5b6c083b9c",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			},
			{
				"id": "6e97124a-949a-4c88-ac1c-304b347882ed",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "6e09f79d-7757-485e-b2f5-1e0b201f5ae0",
				"plants": []
			}
		]
	},
	{
		"id": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
		"name": "Küche",
		"category": "KITCHEN",
		"grid": [
			{
				"id": "a8a007e5-4299-4c28-ab5e-21e503340062",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "a98edf43-0241-4151-9193-458a493172c5",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "9bc53d24-5d9d-4383-a94c-f66b03ccaf13",
				"x": 0,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "9fd53d15-ea9f-4786-ad08-4c05e619df5f",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "13c36840-9ac0-444c-b24a-d83ffacf46f0",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "3415049a-e6f8-47c0-a1b5-273c1d657c2c",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "2f00da48-2fd7-4b68-9b01-8a850ebf26a8",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": [
					{
						"id": "d3c65fa7-ee9c-4702-a249-322134e6b273",
						"name": "Bob",
						"picturePath": "bob.jpg",
						"notes": "Geschenk von meiner Oma",
						"room": {
							"id": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
							"name": "Küche",
							"category": "KITCHEN"
						},
						"hasOptimalLightingCondition": false,
						"species": {
							"id": "795fc3e0-6542-43c8-a3e0-9c8da4931e4a",
							"name": "Aloe Vera",
							"latinName": "Aloe vera",
							"picturePath": "aloe_vera.jpg",
							"family": "Asphodelaceae",
							"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
							"needs": {
								"id": "73fa2d56-8430-46c7-aefc-8d3f3e09dc02",
								"lightingType": "FULL_SUN",
								"intervals": {
									"CUTTING": 365,
									"FERTILIZING": 60,
									"WATERING": 21,
									"REPOTTING": 365
								}
							}
						},
						"needs": {
							"id": "eee7d065-7574-4815-81bc-51c312608772",
							"lightingType": "FULL_SUN",
							"intervals": {
								"CUTTING": 365,
								"FERTILIZING": 60,
								"WATERING": 21,
								"REPOTTING": 365
							}
						},
						"assignments": [
							{
								"id": "c89419ea-76d7-46d9-801e-46445cbd69b5",
								"assignmentType": "CUTTING",
								"lastDone": null,
								"plantId": "d3c65fa7-ee9c-4702-a249-322134e6b273",
								"plantName": "Bob"
							},
							{
								"id": "e2fc3256-e17d-42a2-b9a0-9a68260c756b",
								"assignmentType": "FERTILIZING",
								"lastDone": null,
								"plantId": "d3c65fa7-ee9c-4702-a249-322134e6b273",
								"plantName": "Bob"
							},
							{
								"id": "dddc1b37-640d-4a59-ae20-1f974b56049b",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "d3c65fa7-ee9c-4702-a249-322134e6b273",
								"plantName": "Bob"
							},
							{
								"id": "987c3c97-eb25-44d8-8f6f-e3f362d83804",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "d3c65fa7-ee9c-4702-a249-322134e6b273",
								"plantName": "Bob"
							}
						]
					}
				]
			},
			{
				"id": "cd25099b-d1b4-4392-8b9c-b9a0678d9b51",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "6a1bdf6a-edc3-41c4-afff-e36633dd9661",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "6159f567-4206-4596-85e7-780c897500b0",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "68fbcc7f-f67d-4d3e-a078-4ce04413e912",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "e7360872-cf65-4137-86d4-a6bfe08a01a9",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "84fe70b9-4378-4ccb-8527-9916a3981399",
				"x": 3,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "3f14b725-d6b1-47fc-8b70-89ff12315ecb",
				"x": 3,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "f0d28b9c-2a54-4c0d-84a4-79e644dee6d0",
				"x": 3,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "8cd12298-3b10-4bd8-be44-9a763980c406",
				"x": 3,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "9bb4b64c-488f-4f1a-b6c0-3b20fcb42119",
				"x": 4,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "8d8f9eab-955f-4c04-9836-a4d731f0b02a",
				"x": 4,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "27f0148f-8ec6-4a45-acea-f484d94ddbff",
				"x": 4,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			},
			{
				"id": "aa1801ce-da90-41e4-b11a-aea893993667",
				"x": 4,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "971732dd-afd5-4f58-adf1-1f24ff3d4a05",
				"plants": []
			}
		]
	},
	{
		"id": "90984ffc-1d6e-4416-9919-de7e08532dfc",
		"name": "Balkon",
		"category": "BALCONY",
		"grid": [
			{
				"id": "8cfc547c-4b27-49ff-92ab-2fd687172ce4",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "90984ffc-1d6e-4416-9919-de7e08532dfc",
				"plants": []
			},
			{
				"id": "0bbd22fa-d30b-459f-9cf8-6f63bd4a9bd8",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "90984ffc-1d6e-4416-9919-de7e08532dfc",
				"plants": []
			},
			{
				"id": "239534ec-0581-41f7-9685-f65930cab74b",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "90984ffc-1d6e-4416-9919-de7e08532dfc",
				"plants": []
			},
			{
				"id": "cb4badd9-bbd5-489b-b60a-215f4718498a",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "90984ffc-1d6e-4416-9919-de7e08532dfc",
				"plants": []
			}
		]
	}
]