# Backend happy-plant
- Kotlin Spring boot
- bei gradle build error nach erstem import in intellij runtime target vm auf java 17 setzen

## Datenbank Handling
- Einstellungen in `application.properties` verwalten
    - neue DB nutzen: `spring.datasource.url=jdbc:h2:file:./data/{your-db}`
    - mit IDE Unterstützung die DB erzeugen
- Datenbank-schema wird on run automatisch erzeugt
    - `backend/src/create.sql`
- Neuinitialisierung (Anwenden des Schemas) muss manuell aktiviert werden:
    - `schema.create.enabled=true`
    - dazu ggf. vorher die db clearen (sonst table already exists)

## Swagger API Dokumentation 
- `cd backend/swagger-docs`
- `docker compose up -d`
- [Swagger UI](http://localhost:8086/)