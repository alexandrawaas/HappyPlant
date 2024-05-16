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
		"id": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
		"name": "Wohnzimmer",
		"category": "LIVING_ROOM",
		"x": 3,
		"y": 4,
		"grid": [
			{
				"id": "c1f3a500-40ef-45b7-b503-511215daad05",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": [
					{
						"id": "e8b11186-940c-48b1-8d84-467d82fa5aaa",
						"name": "Gloria",
						"picturePath": "gloria.jpg",
						"notes": "Hat einen Kälteschaden. Nur gießen wenn trocken!",
						"room": {
							"id": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
							"name": "Wohnzimmer",
							"category": "LIVING_ROOM"
						},
						"hasOptimalLightingCondition": false,
						"species": {
							"id": "24b25ce1-8acd-408d-bc8d-ebeb44545238",
							"name": "Schmetterlingsorchidee",
							"latinName": "Phalaenopsis",
							"picturePath": "butterfly_orchid.jpg",
							"family": "Orchidaceae",
							"description": "Schmetterlingsorchideen haben elegante, sich bogenförmig erstreckende Blütentrauben, die Schmetterlingen ähneln. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
							"needs": {
								"id": "a3386db6-63fe-479d-a6cf-5cf39d6b6e82",
								"lightingType": "PART_SHADE",
								"intervals": {
									"FERTILIZING": 30,
									"CUTTING": 90,
									"WATERING": 7,
									"REPOTTING": 365
								}
							}
						},
						"needs": {
							"id": "fe3cb12a-f26a-4770-a320-4868ec331907",
							"lightingType": "PART_SHADE",
							"intervals": {
								"WATERING": 21,
								"REPOTTING": 150
							}
						},
						"assignments": [
							{
								"id": "687ef50a-3079-4257-b05f-c71fa000337a",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "e8b11186-940c-48b1-8d84-467d82fa5aaa",
								"plantName": "Gloria"
							},
							{
								"id": "b5edc50b-9e23-45b9-a3cb-527b0d1301f7",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "e8b11186-940c-48b1-8d84-467d82fa5aaa",
								"plantName": "Gloria"
							}
						]
					}
				]
			},
			{
				"id": "8d3a63e4-ba57-4d51-b355-d4cec4bc8a94",
				"x": 0,
				"y": 1,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "cf76e546-e3bd-4b52-b6b4-2c54a985448b",
				"x": 0,
				"y": 2,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "22c02ad1-3d41-4873-be47-4fbe19f8ad23",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "a1c02763-6207-4272-b687-57a2d5e3a586",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "c3c6a055-a334-469a-a4ac-02c47985ce51",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "65afc0cf-d453-4fe9-af9b-1ab35eec0098",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "b800fbd3-c4d3-4be8-8b51-56148d952c2c",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "a0b1ff04-1fec-4d6a-9865-a5af9afd3f6f",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "36008b5c-6d04-4bbf-a12b-682ddf8907c4",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "0280e080-47db-456a-bd3d-fb86be349664",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			},
			{
				"id": "1b69c125-b93c-4ade-b89c-7235efe99362",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "2e30b982-ba4c-4fc6-91df-6ef73eaf1448",
				"plants": []
			}
		],
		"numberOfPlants": 1,
		"numberOfWarnings": 1,
		"numberOfAssignments": 1
	},
	{
		"id": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
		"name": "Küche",
		"category": "KITCHEN",
		"x": 5,
		"y": 4,
		"grid": [
			{
				"id": "c0a8c68b-64d4-46e2-ae4d-34b3fe284b83",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "b5d84400-3b08-497d-8319-e5dbdd3bed60",
				"x": 0,
				"y": 1,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "da94dc4b-ad83-41d6-9c68-dc1025a17e40",
				"x": 0,
				"y": 2,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "589009d7-483d-4e11-be50-072e706096d7",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "b022afa3-066b-462a-8cc7-a07ee9c14bcf",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "c65564e6-4ae0-412f-82f4-fffde73b4735",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "d4790c19-4cb0-430d-ad6a-04ca37007901",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": [
					{
						"id": "50f5671f-b884-461c-a941-899fae600145",
						"name": "Bob",
						"picturePath": "bob.jpg",
						"notes": "Geschenk von meiner Oma",
						"room": {
							"id": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
							"name": "Küche",
							"category": "KITCHEN"
						},
						"hasOptimalLightingCondition": true,
						"species": {
							"id": "8892fd3d-4b14-464c-b286-8e01d1496261",
							"name": "Aloe Vera",
							"latinName": "Aloe vera",
							"picturePath": "aloe_vera.jpg",
							"family": "Asphodelaceae",
							"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
							"needs": {
								"id": "653f9b24-c0a9-4866-85ca-28899e00c027",
								"lightingType": "FULL_SUN",
								"intervals": {
									"FERTILIZING": 60,
									"CUTTING": 365,
									"WATERING": 21,
									"REPOTTING": 365
								}
							}
						},
						"needs": {
							"id": "1022c6d3-9bf4-48bb-870b-2873262c14f1",
							"lightingType": "FULL_SUN",
							"intervals": {
								"FERTILIZING": 60,
								"CUTTING": 365,
								"WATERING": 21,
								"REPOTTING": 365
							}
						},
						"assignments": [
							{
								"id": "dc7abe37-636c-4e42-a429-ac26f30558a3",
								"assignmentType": "FERTILIZING",
								"lastDone": null,
								"plantId": "50f5671f-b884-461c-a941-899fae600145",
								"plantName": "Bob"
							},
							{
								"id": "8b56f40c-67ea-46f9-8dec-5776e70de1c3",
								"assignmentType": "CUTTING",
								"lastDone": null,
								"plantId": "50f5671f-b884-461c-a941-899fae600145",
								"plantName": "Bob"
							},
							{
								"id": "4c1fa3df-f144-43ce-82a4-624c90a8e4ea",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "50f5671f-b884-461c-a941-899fae600145",
								"plantName": "Bob"
							},
							{
								"id": "4030855d-c6e4-40f0-9383-ff764ea1dfbc",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "50f5671f-b884-461c-a941-899fae600145",
								"plantName": "Bob"
							}
						]
					}
				]
			},
			{
				"id": "91629177-1e0f-4b4c-bf12-bd9e9c01b027",
				"x": 1,
				"y": 3,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "3ce9bd7f-7c58-41cb-a203-4cf0af38569f",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "896f9df1-3ba2-471e-835b-71b0cca1308f",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "ae846eb2-696f-417e-81f8-fd4e0338c3a5",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "72d3a89e-c175-4823-939d-905427513a81",
				"x": 2,
				"y": 3,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "ae3f6c31-48ae-4092-be96-5692c7718cd2",
				"x": 3,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "53d8a443-6940-46a8-8d2c-18f1d05d1cb0",
				"x": 3,
				"y": 1,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "ab081a4b-a75a-4b22-bacb-da9f2bec641b",
				"x": 3,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "5231e9ed-8016-455e-9486-67aca3cfc5d0",
				"x": 3,
				"y": 3,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "df927cc5-27be-4488-b8ae-5f5bff4cd662",
				"x": 4,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "18a62b67-a920-435d-b5ad-492c29f43b6c",
				"x": 4,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "6dda3e63-0a62-4b9a-9366-73f8a98b06b4",
				"x": 4,
				"y": 2,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			},
			{
				"id": "145239a0-87f4-48a0-a055-3b574ce82632",
				"x": 4,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "a70c2db4-ec96-41d0-ad23-e676d62a4ca6",
				"plants": []
			}
		],
		"numberOfPlants": 1,
		"numberOfWarnings": 0,
		"numberOfAssignments": 1
	},
	{
		"id": "c972e6a7-a93b-4fa4-900e-2198c7966e96",
		"name": "Balkon",
		"category": "BALCONY",
		"x": 2,
		"y": 2,
		"grid": [
			{
				"id": "7b1e1b38-c89e-4ee6-8be3-b38918810ef1",
				"x": 0,
				"y": 0,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "c972e6a7-a93b-4fa4-900e-2198c7966e96",
				"plants": []
			},
			{
				"id": "abd4a26e-3cd1-4e29-97f5-9f5c922a0f12",
				"x": 0,
				"y": 1,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "c972e6a7-a93b-4fa4-900e-2198c7966e96",
				"plants": []
			},
			{
				"id": "63981434-91e8-438b-9e7a-b5646446c45e",
				"x": 1,
				"y": 0,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "c972e6a7-a93b-4fa4-900e-2198c7966e96",
				"plants": []
			},
			{
				"id": "ba3cf895-6938-426c-a394-762bb0cd35ea",
				"x": 1,
				"y": 1,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "c972e6a7-a93b-4fa4-900e-2198c7966e96",
				"plants": []
			}
		],
		"numberOfPlants": 0,
		"numberOfWarnings": 0,
		"numberOfAssignments": 0
	}
]