# Projekt Idee

## User Management
- // TODO
- Machen wir einen Account mit Authentifizierung oder speichern wir alles Lokal und lassen es über ID / Token übertragen
    - Account wäre realsitischer
## Spezies (Lexikon)
### Übersicht
- alle bestehenden Pflanzenarten anzeigen (Name und Bild)
- User kann neue Pflanzenarten hinzufügen
- ~~opt: filtern~~
### Einzelansicht
- alle Infos zu Pflanze (Name, Bild, Licht-Gieß-Umtopf-Schnitt-Düng-OptimalTemperatur-TemperaturToleranz)
- Funktion "Diese Pflanze zu meinem Haushalt hinzufügen" > Welcher Raum > normales Drag and Drop Interface
### Backendfunktionalität
- Pflanzendatenbank mit ca 30 Pflanzen mit je einem Default Bild und deren Daten vorkonfigurieren
- Controller
    - Species: create, getall
- Funktionen
    - room.add(species)
## Räume
### Übersicht
- alle angelegten Räume in Liste mit Kacheln, die sich automatisch schön platzieren :),
    - Icon für "Hier gibt es Probleme" und "Hier gibt es To-Dos"
- Erstellen eines neuen Raumes:
    - Name
    - Seitenverhältnis (Es gibt nur rechteckige Räume)
    - Fenster platzieren (Skala erscheint erst, wenn das Fenster final platziert wurde)
    - ~~Luftfeuchtigkeit~~
    - ~~Temperatur normalwert und toleranz~~
    - ~~Himmelsrichtung: Der Raum wird immer mit der kürzeren Seite nach oben auf dem Bildschirm angezeigt. Der User wählt aus, welche Himmelsrichtung da oben ist (mit einem Scrollrad N, NO, O, SO, ...) und die anderen werden dementsprechend berechnet~~
### Einzelansicht
- Draufsicht auf Raum
    - Platzierte Pflanzen sichtbar
        - touch > Pflanzeneinzelansicht
        - long touch > Name
        - Symbol bei fehlerhafter Platzierung oder Todo
    - ~~wenn mehr Pflanzen auf einer Position, Pop Up zur direkteren Auswahl für mehr Usability~~
    - Lichtverhältnisse abbilden
    - per Drag and Drop Pflanzen verschiebbar
- Neue Pflanze zu Raum hinzufügen (landet nach Erstellung in Inventar)
    - Auswahl aus allen bestehenden Spezies im Lexikon
        - ~~opt: ggf. nur Vorschläge basierend auf Luftfeuchtigkeit und Temperatur~~
    - Konfiguration der Properties (s.u.)
        - ~~letzten Zeitpunkt aller Aufgabenkategorien (Gieß-Umtopf-Schnitt-Düng) angeben, Ausgangspunkt für Intervallberechnung~~
- Inventar (Pflanzen die in ~~diesen/~~einen Raum platziert werden wollen)
    - Pflanze aus Inventar löschen 
    - ~~in anderen Raum verschieben (Notizen dieser Pflanze bleiben bestehen) / alternativ~~ Inventar für alle Räume gleich
    - Pflanze per Drag and Drop in Raum Grid platzieren
        - dabei Feedback ob guter/schlechter Standort
            - ~~opt.: auf Jahreszeiten eingehen~~
- ~~Aufgabenliste für diesen Raum~~
    - ~~Todos abhakbar~~
    - ~~fehlerhafte Platzierungen~~
### Backendfunktionalität 
- Entität
    - grid-Pixel: Koordinate, Sonnenlicht-wert, Liste von dort platzierten Pflanzen
- Controller
    - Room: create, getAllForUser(user)
    - Plant: create, getAllForRoom(room), delete, 
- Funktionalität
    - Room: addPlant(plant, gridPixel), anyWarnings():bool
        - onCreate calculate light value for each grid pixel
    - Plant: getTodos(), getPlacementWarning(), startIntervalFrom(date)
    - Todo: check(date) -> callback restart interval
## Pflanzen
### Einzelansicht (Navigation: Raum>Pflanze)
- alle Properties anzeigen
    - Name, Spezies, Bild (wenn kein eigenes, das Default aus der Datenbank)
- Adaptionen erlauben
    - ~~Anforderungen Luftfeuchtigkeit und Temperatur (individuell anpassen)~~
    - Intervalle für Aufgaben (individuell anpassen)
    - Notizen zur Pflanze
- jeweiliges Datum für nächstes Todo pro Kategorie (Gieß-Umtopf-Schnitt-Düng) anzeigen
    - ~~opt.: beim Gießen abhängig von Helligkeit und Luftfeuchtigkeit~~
## Aufgabenverwaltung
### Übersicht
- ~~Darstellungsspezifika: Überfällige Aufgaben rot markieren, Farben für verschiedene Aufgabenarten~~
- Aufgaben abhaken
    - ~~alle auf einmal~~
    - ~~gruppenweise pro Kategorie~~
    - rückwirkend für Datum
- Tägliche Benachrichtigung ~~mit einstellbarer Uhrzeit~~ über Aufgaben für diesen Tag
    - ~~Uhrzeit-Einstellung im User-Profil festlegbar~~
- ~~sortierbar (Art der Aufgabe, Fälligkeit, Raum)~~
### Backendfunktionalität
- Controller
    - Todo: create, getAllDueForUser 
- Funktionalität
    - Todo: setNextDueDate(lastDate)
    - Todo: event ondatedue -> notify



