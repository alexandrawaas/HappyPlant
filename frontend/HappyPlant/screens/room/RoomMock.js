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

export const roomMock =[
	{
		"id": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
		"name": "Wohnzimmer",
		"category": "LIVING_ROOM",
		"x": 3,
		"y": 4,
		"grid": [
			{
				"id": "9bd6889a-653d-4cf2-b25b-b078356facd6",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": [
					{
						"id": "23c93d6a-7739-4ac2-a5d5-8e8d82f85c7b",
						"name": "Gloria",
						"picturePath": "gloria.jpg",
						"notes": "Hat einen Kälteschaden. Nur gießen wenn trocken!",
						"room": {
							"id": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
							"name": "Wohnzimmer",
							"category": "LIVING_ROOM"
						},
						"hasOptimalLightingCondition": false,
						"species": {
							"id": "0a1043f0-1220-4952-96c7-0577e2cb1cb0",
							"name": "Schmetterlingsorchidee",
							"latinName": "Phalaenopsis",
							"picturePath": "butterfly_orchid.jpg",
							"family": "Orchidaceae",
							"description": "Schmetterlingsorchideen haben elegante, sich bogenförmig erstreckende Blütentrauben, die Schmetterlingen ähneln. Sie bevorzugen helles, indirektes Licht und regelmäßiges Gießen.",
							"needs": {
								"id": "834f5227-ab27-4b9c-8fe1-2f08f19f3236",
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
							"id": "3f048d91-a879-4ce8-b79e-4f89876acb39",
							"lightingType": "PART_SHADE",
							"intervals": {
								"WATERING": 21,
								"REPOTTING": 150
							}
						},
						"assignments": [
							{
								"id": "97a8b50e-8200-434e-acbf-3b8664281fb9",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "23c93d6a-7739-4ac2-a5d5-8e8d82f85c7b",
								"plantName": "Gloria"
							},
							{
								"id": "5ad556f3-1e06-4e4d-986e-9e9ab64f56eb",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "23c93d6a-7739-4ac2-a5d5-8e8d82f85c7b",
								"plantName": "Gloria"
							}
						]
					}
				]
			},
			{
				"id": "74ab3d11-5e70-407b-bdfe-37f9e56d71e1",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "60316814-a78f-4777-b812-b4e3dcd8e7c1",
				"x": 0,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "208b11a7-3a8a-4269-8d83-36a66b03b214",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "8dad5574-cdf5-4918-ab21-031c26338b36",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "d1e9aef8-d3d6-4bdc-8cff-9e6fff649461",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "f3790a84-92e1-46e9-996c-cff365233138",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "a5704c9f-8fd7-4499-ad09-0ea68fddd32e",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "7368544a-4d1c-47f3-92bf-f9cce72e28a0",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "d8ceb3c7-d73a-4b03-9822-83177a0daca5",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "c3ede2f6-f7af-47b8-96af-69bc13d60efa",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			},
			{
				"id": "68f67f9d-c75a-4f45-a511-fb25f2dd948c",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "9668b3e5-4aa7-4c8e-be9d-1d45ec242a47",
				"plants": []
			}
		],
		"numberOfPlants": 1,
		"numberOfWarnings": 1,
		"numberOfAssignments": 1
	},
	{
		"id": "f8acfd1e-f50b-452b-b780-45af9248d389",
		"name": "Küche",
		"category": "KITCHEN",
		"x": 5,
		"y": 4,
		"grid": [
			{
				"id": "821e2ccc-a67b-4741-94ad-51784b3c9e36",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "86a81b28-0d7e-4cf9-a135-094d34cf76c8",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "3b3c3ddd-2f40-458c-bec2-27ccee0dfee7",
				"x": 0,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "7a2c732a-4679-425e-86d1-317d08bac9f5",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "7f86180f-b737-41fc-9d0a-84c54aa151fa",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "0b33c525-7b7a-4b30-b954-c522ddfc69e4",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "d94b9a47-a586-4952-ad6f-1b21eddb3a9a",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": [
					{
						"id": "7b4f1ea0-48ff-4dde-bb3d-b1254fd15cef",
						"name": "Bob",
						"picturePath": "bob.jpg",
						"notes": "Geschenk von meiner Oma",
						"room": {
							"id": "f8acfd1e-f50b-452b-b780-45af9248d389",
							"name": "Küche",
							"category": "KITCHEN"
						},
						"hasOptimalLightingCondition": false,
						"species": {
							"id": "759e5bfd-ea2a-4cdc-ae2a-3a949b511321",
							"name": "Aloe Vera",
							"latinName": "Aloe vera",
							"picturePath": "aloe_vera.jpg",
							"family": "Asphodelaceae",
							"description": "Aloe vera ist eine Sukkulentenart, die für ihre medizinischen Eigenschaften bekannt ist. Sie bevorzugt einen hellen Standort und wenig Wasser.",
							"needs": {
								"id": "06a84651-8f64-483a-8a6c-6e4daf50500b",
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
							"id": "04accab5-ed29-42a8-bbc4-4c7512aed9bf",
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
								"id": "206c8607-9635-46c5-afda-5d1af0072845",
								"assignmentType": "FERTILIZING",
								"lastDone": null,
								"plantId": "7b4f1ea0-48ff-4dde-bb3d-b1254fd15cef",
								"plantName": "Bob"
							},
							{
								"id": "41afddf3-aa1b-4c61-b335-f260c963d24f",
								"assignmentType": "WATERING",
								"lastDone": null,
								"plantId": "7b4f1ea0-48ff-4dde-bb3d-b1254fd15cef",
								"plantName": "Bob"
							},
							{
								"id": "39d28326-b534-477a-94f1-4fdd33cc4cd5",
								"assignmentType": "CUTTING",
								"lastDone": null,
								"plantId": "7b4f1ea0-48ff-4dde-bb3d-b1254fd15cef",
								"plantName": "Bob"
							},
							{
								"id": "e5678131-c347-4627-9e71-c73df2dd5519",
								"assignmentType": "REPOTTING",
								"lastDone": null,
								"plantId": "7b4f1ea0-48ff-4dde-bb3d-b1254fd15cef",
								"plantName": "Bob"
							}
						]
					}
				]
			},
			{
				"id": "0493f259-e8c9-4ae4-9e06-4a2df0e0ca7b",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "ec8d9f01-339f-41bc-8b4f-32fbb8971739",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "bf097e39-d379-47c9-8516-40bdf46c5631",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "9b285692-ec31-4132-9a0f-9864052730a9",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "b1b7395b-35fe-4b21-9c8b-483be8367ebf",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "cf2aff59-7e57-4eb9-9603-2d22a456bc0f",
				"x": 3,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "af5499a6-c506-4d80-8ba3-c38c8b5c7823",
				"x": 3,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "7e32b9dc-1078-4d5d-96b3-5d5a014b45da",
				"x": 3,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "9521fd5d-c4e4-432d-8530-c72cb43d1c9f",
				"x": 3,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "b13b85fe-e74c-44fa-bae8-d0f1a2396cd2",
				"x": 4,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "65384cb0-cd6c-40b3-b3d0-236989aa56e3",
				"x": 4,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "9f46071c-9ffb-492f-b564-b34ef3d860a8",
				"x": 4,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			},
			{
				"id": "b23b794f-463d-43f3-98a7-a0839d68b5cc",
				"x": 4,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "f8acfd1e-f50b-452b-b780-45af9248d389",
				"plants": []
			}
		],
		"numberOfPlants": 1,
		"numberOfWarnings": 1,
		"numberOfAssignments": 1
	},
	{
		"id": "dc7190e9-afe3-42ec-b407-8715226844c5",
		"name": "Balkon",
		"category": "BALCONY",
		"x": 2,
		"y": 2,
		"grid": [
			{
				"id": "42158545-64b9-4de2-8d6d-6b3eed2e6525",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "dc7190e9-afe3-42ec-b407-8715226844c5",
				"plants": []
			},
			{
				"id": "37bcb75b-2b95-41dc-b44a-49662fdeddcb",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "dc7190e9-afe3-42ec-b407-8715226844c5",
				"plants": []
			},
			{
				"id": "32dbb853-aaa8-4110-8771-16a6d4a6ea9d",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "dc7190e9-afe3-42ec-b407-8715226844c5",
				"plants": []
			},
			{
				"id": "2e5025a1-f05d-4e53-96bf-925c2b67f832",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "dc7190e9-afe3-42ec-b407-8715226844c5",
				"plants": []
			}
		],
		"numberOfPlants": 0,
		"numberOfWarnings": 0,
		"numberOfAssignments": 0
	},
	{
		"id": "c33f0bc1-b004-4f25-9b46-e2469d145909",
		"name": "Badezimmer",
		"category": "BATHROOM",
		"x": 3,
		"y": 5,
		"grid": [
			{
				"id": "63956f01-4905-45ff-8bf8-8ce0e108ca35",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "c97e31db-1f26-4886-be1d-1f52f69a0eb0",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "ef5a9a27-1dc1-4418-bde4-f5260c100b62",
				"x": 0,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "25e557ae-2098-43c7-82d9-a0b26645ad80",
				"x": 0,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "84072d95-1d4c-4f75-bfa0-76861c00ecad",
				"x": 0,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "21909d8c-c683-473c-817f-a409c0884446",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "35ce9240-99d9-48e7-b3c9-66d72788a727",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "1f61af88-5b52-4c32-84dd-19010c2a3b70",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "882fcd5a-ad14-43a8-923a-f9c354dc378e",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "6fb7da6f-4ebe-4999-8a31-6351e5bdd206",
				"x": 1,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "ac1f807c-6d01-4db2-bf2f-6d9670a4a193",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "73e78ebf-6a9f-4043-abe1-b2e054de6fe3",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "f547db21-1252-42c4-8e30-d0a8290e1f6b",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "e11311d1-8fa1-4c53-b269-e02096933da6",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			},
			{
				"id": "a16163e7-eb9a-40d5-ab37-e8fd32543694",
				"x": 2,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "c33f0bc1-b004-4f25-9b46-e2469d145909",
				"plants": []
			}
		],
		"numberOfPlants": 0,
		"numberOfWarnings": 0,
		"numberOfAssignments": 0
	},
	{
		"id": "99fa6420-556f-4179-9c38-f18151ec31ea",
		"name": "Saal",
		"category": "OTHER",
		"x": 9,
		"y": 7,
		"grid": [
			{
				"id": "59635b0b-1f74-443e-920b-8190f0c7b8c9",
				"x": 0,
				"y": 0,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "f8a6e8c8-03cf-4e38-bcf5-a64d5c9f2b69",
				"x": 0,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "06a16bf7-54ab-4c3d-8b48-7f0f62dc1504",
				"x": 0,
				"y": 2,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "f8bb25af-b204-49b9-a85c-1234c411a498",
				"x": 0,
				"y": 3,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "ac155ce1-c1b4-488f-a4c9-051d2f6cfa7b",
				"x": 0,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "8cb9a11a-8609-4236-9032-a7e1ba36fdc9",
				"x": 0,
				"y": 5,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "06dd83d6-834e-4287-bb85-cbd796cca0dc",
				"x": 0,
				"y": 6,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "5e5e27d8-050f-4f70-9873-c937a4382174",
				"x": 1,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "6e748e11-7f26-4657-9053-738e5c36cab4",
				"x": 1,
				"y": 1,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "603439ee-e56c-45bc-b9c4-bb4541691dbb",
				"x": 1,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "b4af18b1-5fa9-471d-94c1-6852b7d4c9e0",
				"x": 1,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "be13e3b1-ad1b-482e-a4d6-d9360c6db700",
				"x": 1,
				"y": 4,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "3d854ab7-2ea9-4fde-a6fe-163190606733",
				"x": 1,
				"y": 5,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "6b685c5d-7d0e-4271-a405-e0920ca7d436",
				"x": 1,
				"y": 6,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "57519dfe-72d2-4ac0-aee6-61573c20173a",
				"x": 2,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "707ff7fb-e80f-4eb6-80c7-895a41ae5196",
				"x": 2,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "35440707-62c2-47d6-91b1-07b0e26d8cf7",
				"x": 2,
				"y": 2,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "2bb9bf42-a33d-4702-9972-ecb0964a8cc3",
				"x": 2,
				"y": 3,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "b6690862-8fc3-40ac-8055-d409cb7ee828",
				"x": 2,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "51ac4201-474b-4812-93fa-2a3294c1d85e",
				"x": 2,
				"y": 5,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "21e08843-9961-42da-bdae-243e752b7cb4",
				"x": 2,
				"y": 6,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "bb9d404a-c40b-407f-9d29-7407de75e763",
				"x": 3,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "1fbe6fb7-d4c2-44f1-8d30-1e76d50ae05c",
				"x": 3,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "d2ea51e1-445b-4c47-b56d-cd4119a93dce",
				"x": 3,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "e56eaa1b-7013-4321-b362-8052f9eba743",
				"x": 3,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "4b00a390-8793-44cb-af10-63b09d6c1cc7",
				"x": 3,
				"y": 4,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "2c88af34-97f3-46e5-85b6-23eb80a84148",
				"x": 3,
				"y": 5,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "1074780e-e9b0-4b4b-a77c-8e55a6c5511f",
				"x": 3,
				"y": 6,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "61b970e5-b533-4a8b-a133-981b1de436c6",
				"x": 4,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "243d3329-f99c-4ec5-9ee5-f606f8a89202",
				"x": 4,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "a5f9cc4e-6dfa-4a3f-ac6f-244dd995484d",
				"x": 4,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "a602c64c-3165-4529-b5da-5033c0fc5965",
				"x": 4,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "9ea47f31-3770-44e6-ad85-76c51311b912",
				"x": 4,
				"y": 4,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "86cb2df1-755e-4e6a-bf5e-0db96b066a52",
				"x": 4,
				"y": 5,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "3d70361b-c53c-4937-b3fa-72831f7ebfea",
				"x": 4,
				"y": 6,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "799060ab-8711-4b7e-b30a-b485994396c4",
				"x": 5,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "2115bd7d-ed28-4640-82c7-02bfb444c6fa",
				"x": 5,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "285b692f-7df1-4ba5-acff-6a90d3295a0e",
				"x": 5,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "b3e56398-c863-4403-bbaf-74f6e67463d7",
				"x": 5,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "c0f8a436-eeed-4176-a824-7f003064d55a",
				"x": 5,
				"y": 4,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "02ae0d6f-99e1-4eae-af3a-50fcd86fe85b",
				"x": 5,
				"y": 5,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "27ae2dfb-7370-44bd-864b-2bb42ad209db",
				"x": 5,
				"y": 6,
				"isWindow": true,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "9f9bc9e5-22d3-4449-8694-f3f5b6c7de16",
				"x": 6,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "53648282-b09e-437f-89e7-e8d65c41d3d6",
				"x": 6,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "d6a67feb-cace-4eaa-8590-0d85e5bfab5b",
				"x": 6,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "4f93a908-37cf-4b64-8783-d0273ffd2024",
				"x": 6,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "ee7a4f31-11ff-4c76-80f7-1da43e8e273b",
				"x": 6,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "15f6b796-c37e-4ecf-803a-a063e8f2e728",
				"x": 6,
				"y": 5,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "1076b631-c2d1-4a40-a4ec-f77beb88d669",
				"x": 6,
				"y": 6,
				"isWindow": false,
				"lightingType": "FULL_SUN",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "88c21192-8033-4630-9ac3-1bacd973eed0",
				"x": 7,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "52afc053-df74-40e4-b219-1900256a822b",
				"x": 7,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "bc186358-be68-4224-8052-4ef1b5e14a84",
				"x": 7,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "0fa9bc1e-a32d-4700-86fb-c5b5182d73cd",
				"x": 7,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "63781088-316f-4e60-83ee-b313a1b2ee21",
				"x": 7,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "a38978b9-881c-476d-8110-7f16954d15a1",
				"x": 7,
				"y": 5,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "b6f186a6-c156-4040-ad27-40ec08836dd0",
				"x": 7,
				"y": 6,
				"isWindow": false,
				"lightingType": "PART_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "1b54d0f9-dac5-4398-87e7-33b15e5ca08f",
				"x": 8,
				"y": 0,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "68c0d78d-5b24-4e77-8eb5-16665632dc5c",
				"x": 8,
				"y": 1,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "0db6177a-599e-480a-a61e-e1bcbc0a971c",
				"x": 8,
				"y": 2,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "0ecda185-005a-4e54-8f85-1cad128d8973",
				"x": 8,
				"y": 3,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "27041717-506e-4884-8ff1-1de8f348ef4e",
				"x": 8,
				"y": 4,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "122088e4-bc95-454c-af0e-04d6ca7e8ae6",
				"x": 8,
				"y": 5,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			},
			{
				"id": "5fc2aba9-c25f-488a-a9bc-7494f9ef350e",
				"x": 8,
				"y": 6,
				"isWindow": false,
				"lightingType": "FULL_SHADE",
				"roomId": "99fa6420-556f-4179-9c38-f18151ec31ea",
				"plants": []
			}
		],
		"numberOfPlants": 0,
		"numberOfWarnings": 0,
		"numberOfAssignments": 0
	}
]