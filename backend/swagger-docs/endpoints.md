# Sammlung der Endpunkte

## Auth (root/auth)
- POST /register
- POST /login
- POST /logout
- PUT /email/verify
- PUT /password
- POST /password/reset

## User (root/users) // falls wir das wollen
- DELETE /id

## Plant (root/plants)
- GET
- GET /id   // inklusive Needs und Assignments
- POST
- PUT /id
- DELETE /id

## Inventar (root/inventory)
- GET // die gefilterte Liste, alle puts/posts über plant abgedeckt

## Species (root/species)
- GET
- GET /id

## Room (root/rooms, auth-protected)
- GET
- GET /id
- POST
- DELETE /id

## Pflanze in Raum (root/rooms/{roomId}/plants, auth)
- GET
- POST
- PUT /{plantId} //koordinaten ändern (body)
- DELETE {plantId}

## Assignments von Pflanze (root/plants/{plantId}/assignments)
- PUT /{assignementId} //body für lastDone change

## Assignment (root/assignments)
- GET //regardless of which plant, but filtered for active
