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
		"id": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
		"name": "Wohnzimmer",
		"category": "LIVING_ROOM",
		"x": 3,
		"y": 4,
		"grid": [
			{
				"id": "1a1df2bf-7126-4c0c-8c77-191dfe1fdd81",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": [
					{
						"id": "3a2143dd-b17e-4532-9e38-cfc7e0690ea2",
						"name": "Gloria",
						"picturePath": "gloria.jpg",
						"notes": "Hat einen Kälteschaden. Nur gießen wenn trocken!",
						"room": {
							"id": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
							"name": "Wohnzimmer",
							"category": "LIVING_ROOM"
						},
						"hasOptimalLightingCondition": false,
						"species": {
							"id": "410079a6-884f-4477-8ce5-c875bf819169",
							"name": "Schmetterlingsorchidee",
							"latinName": "Phalaenopsis",
							"picturePath": "butterfly_orchid.jpg",
							"family": "Orchidaceae",
							"description": "Schmetterlingsorchideen haben elegante, sich bogenförmig erstreckende Blütentrauben, die Schmetterlingen ähneln. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
							"needs": {
								"id": "f203e969-48ad-4551-af12-eaacf681256c",
								"lightingType": "PART_SHADE",
								"intervals": {
									"FERTILIZING": 30,
									"WATERING": 7,
									"CUTTING": 90,
									"REPOTTING": 365
								}
							}
						},
						"needs": {
							"id": "e19b51d8-2768-47b4-b257-0f0f8ebd27cf",
							"lightingType": "PART_SHADE",
							"intervals": {
								"WATERING": 21,
								"REPOTTING": 150
							}
						},
						"assignments": [
							{
								"id": "a329fb23-7dfb-42c3-8bb0-10a94847d5dc",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "3a2143dd-b17e-4532-9e38-cfc7e0690ea2",
								"plantName": "Gloria"
							},
							{
								"id": "1dab44fb-22be-4ecf-800a-d0e612538c6b",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "3a2143dd-b17e-4532-9e38-cfc7e0690ea2",
								"plantName": "Gloria"
							}
						]
					}
				]
			},
			{
				"id": "f8436502-d78b-40b4-b234-1ba76e79d936",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "4ab3ba7c-1f14-4fab-97f7-8c534f396824",
				"x": 0,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "f6e7ae42-8f7b-401a-8f62-a94dfd036d3b",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "f9c90449-cb28-43bf-a2c8-acfdd3105494",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "3978a5c8-efa9-486a-857e-94946604cd44",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "df4ce42c-b27e-451b-b491-7c94fe412e58",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "b32da9d9-4934-4c64-bd05-d9797c85261a",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "58df50f1-af5e-4d2b-8952-96722ce11e83",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "fd385d2a-eb0c-4720-9953-6681bd1ff2e4",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "3c42b0c0-5486-4c35-9627-2ca7fe5b9955",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			},
			{
				"id": "a7487249-f0c7-4f78-ab61-904904e80350",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "944d9c5e-29b6-4eb9-9191-453b1742fddc",
				"plants": []
			}
		],
		"numberOfPlants": 1,
		"numberOfWarnings": 1,
		"numberOfAssignments": 1
	},
	{
		"id": "32146db7-cead-4128-9332-d25f626086c6",
		"name": "Küche",
		"category": "KITCHEN",
		"x": 5,
		"y": 4,
		"grid": [
			{
				"id": "23197290-cfe3-4005-b9a1-5953576edd9e",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "133c1ccb-df36-4e36-9439-dbe9edcd9c63",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "d9eb6518-a769-4252-9876-58680bf336cc",
				"x": 0,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "ec2a28d5-3ac3-490e-b03e-b1ffe1a7cad8",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "8d102509-f8f4-4c8b-bad5-a2c2b3f9f2be",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "8ac8097a-6bee-4287-8e53-3b636f825551",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "62705113-c9c4-4abf-8184-25932b4ecf79",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": [
					{
						"id": "62583ec7-344a-409f-b16b-74cae2b7eba1",
						"name": "Bob",
						"picturePath": "bob.jpg",
						"notes": "Geschenk von meiner Oma",
						"room": {
							"id": "32146db7-cead-4128-9332-d25f626086c6",
							"name": "Küche",
							"category": "KITCHEN"
						},
						"hasOptimalLightingCondition": false,
						"species": {
							"id": "ee9d0cf1-dc5e-410e-a0a5-466e3e2e51cb",
							"name": "Aloe Vera",
							"latinName": "Aloe vera",
							"picturePath": "aloe_vera.jpg",
							"family": "Asphodelaceae",
							"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
							"needs": {
								"id": "8fb5a316-e531-4c59-823b-374c615a52e9",
								"lightingType": "FULL_SUN",
								"intervals": {
									"FERTILIZING": 60,
									"WATERING": 21,
									"CUTTING": 365,
									"REPOTTING": 365
								}
							}
						},
						"needs": {
							"id": "9f9cb740-c6f7-46e3-a635-c726ac72ce5b",
							"lightingType": "FULL_SUN",
							"intervals": {
								"FERTILIZING": 60,
								"WATERING": 21,
								"CUTTING": 365,
								"REPOTTING": 365
							}
						},
						"assignments": [
							{
								"id": "316c5742-3a31-4661-882c-43fbe48ad245",
								"assignmentType": "FERTILIZING",
								"lastDone": null,
								"plantId": "62583ec7-344a-409f-b16b-74cae2b7eba1",
								"plantName": "Bob"
							},
							{
								"id": "c8deba70-f942-4c54-8c64-aab74dae2d60",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "62583ec7-344a-409f-b16b-74cae2b7eba1",
								"plantName": "Bob"
							},
							{
								"id": "a8858e24-711c-471a-91bc-349cb5a4c55c",
								"assignmentType": "CUTTING",
								"lastDone": null,
								"plantId": "62583ec7-344a-409f-b16b-74cae2b7eba1",
								"plantName": "Bob"
							},
							{
								"id": "5276cc1e-9d10-454a-954a-cecd14fe8390",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "62583ec7-344a-409f-b16b-74cae2b7eba1",
								"plantName": "Bob"
							}
						]
					}
				]
			},
			{
				"id": "670b7903-096a-4483-a1c8-245eac75fcf6",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "dd3aa38d-2ccc-4a20-8330-c544ccfb8e94",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "420b956d-48f5-4d40-bdfa-b9720e416ae9",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "59030f17-752a-41b0-a62a-898efccd5fbf",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "31151b63-fba0-4edd-a904-f35a56cadc57",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "6f2ca574-db4f-4556-b398-9c27cabbd07a",
				"x": 3,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "246df532-75a3-4b04-8eef-a539bbad4360",
				"x": 3,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "0db39779-edc0-4edc-93ce-1c78b95fdc07",
				"x": 3,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "fd95647a-2058-4fea-8cc6-fe578586a482",
				"x": 3,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "b58e76e7-b6a5-4882-ad4a-66453ec13acb",
				"x": 4,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "bbf8ee91-7644-4507-b4d7-77d9848cda42",
				"x": 4,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "54a92269-b327-46e6-b9ba-9c4091f51353",
				"x": 4,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			},
			{
				"id": "fa10694e-1591-4479-8e16-0053a650124a",
				"x": 4,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "32146db7-cead-4128-9332-d25f626086c6",
				"plants": []
			}
		],
		"numberOfPlants": 1,
		"numberOfWarnings": 1,
		"numberOfAssignments": 1
	},
	{
		"id": "219624c5-ca96-488e-8174-e07fadf3b726",
		"name": "Balkon",
		"category": "BALCONY",
		"x": 2,
		"y": 2,
		"grid": [
			{
				"id": "0400bf3e-9263-4f59-9dd2-5a507dffccf0",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "219624c5-ca96-488e-8174-e07fadf3b726",
				"plants": []
			},
			{
				"id": "6f408b61-de36-4c14-816c-161492bec432",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "219624c5-ca96-488e-8174-e07fadf3b726",
				"plants": []
			},
			{
				"id": "7f7b4506-cbbd-4639-8755-fef3ada163ef",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "219624c5-ca96-488e-8174-e07fadf3b726",
				"plants": []
			},
			{
				"id": "84f0bdc9-4d56-46f0-b863-7caec05e0c27",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "219624c5-ca96-488e-8174-e07fadf3b726",
				"plants": []
			}
		],
		"numberOfPlants": 0,
		"numberOfWarnings": 0,
		"numberOfAssignments": 0
	}
]