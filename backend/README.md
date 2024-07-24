# Backend happy-plant
- used framework: Kotlin Spring boot

## Setup
### Konfiguration
- in .env muss eine `API_URL` hinterlegt werden 
    - wird beim senden von emails als host für Links verwendet

### Datenbank Handling
- Einstellungen in `application.properties` verwalten
    - neue DB nutzen: `spring.datasource.url=jdbc:h2:file:./data/{your-db}`
    - mit IDE Unterstützung die DB erzeugen
- Datenbank-schema wird on run automatisch erzeugt
- [H2-Console](http://localhost:8080/h2-console/)

### Häufige Fehler
- bei gradle build error nach erstem import in intellij runtime target vm auf java 17 setzen
- bei h2 Driver Fehler in `build.gradle.kts` in `runtimeOnly` die aktuelle Version dazu angeben
- tritt ein BeanCreation-Fehler im Db-Initializer auf, gibt es iwelche null-pointer-zugriffe o.ä. - Es liegt kein Konfigurations-Problem vor
- tritt ein BeanCreation-Fehler in Services/Repositories auf, sind vermutlich Annotationen fehlerhaft

## Code Conventions
- wenn möglich wird Kotlin-idiomatisch möglichst kompakter Code geschrieben
    - Single-Expression Functions
    - weglassbare Klammern
    - trailing lambdas
    - ...
- DtoKlassen für Request und Response getrennt
    - converter Funktionen zu/von Entity in Extension File um Single Responsibility im Klassen-File selbst zu wahren


## Swagger API Dokumentation 
- `cd backend/swagger-docs`
- `docker compose up -d`
- [Swagger UI](http://localhost:8086/)