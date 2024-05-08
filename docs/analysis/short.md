## User Management
- Account mit echter Authentifizierung
## Spezies (Lexikon)
### Übersicht
- alle bestehenden Pflanzenarten anzeigen (Name und Bild) 
    - Pflanzendatenbank mit ca 30 Pflanzen mit je einem Default Bild und deren Daten vorkonfigurieren
### Einzelansicht
- alle Infos zu Spezies (Name, Bild, Licht-Gieß-Umtopf-Schnitt-Düng)
- Funktion "Pflanze dieser Art zu meinem Haushalt hinzufügen" > Welcher Raum > normales Drag and Drop Interface
## Räume
### Übersicht
- alle angelegten Räume in Liste mit Kacheln, die sich automatisch schön platzieren :),
    - Icon für "Hier gibt es Probleme" und "Hier gibt es To-Dos"
- Erstellen eines neuen Raumes:
    - Name
    - Seitenverhältnis (Es gibt nur rechteckige Räume)
    - Fenster platzieren (Lichtskala erscheint erst, wenn das Fenster final platziert wurde)
### Einzelansicht
- Draufsicht auf Raum
    - Platzierte Pflanzen sichtbar
        - touch > Pflanzeneinzelansicht
        - long touch > Name
        - Symbol bei fehlerhafter Platzierung oder Todo
    - Lichtverhältnisse abbilden
    - per Drag and Drop Pflanzen (ins Inventar oder innerhalb des Raums) verschiebbar
- Neue Pflanze zu Raum hinzufügen (landet nach Erstellung in Inventar)
    - Auswahl aus allen bestehenden Spezies im Lexikon
    - Konfiguration der Properties (s.u.)
- Inventar (Pflanzen die in einen Raum platziert werden wollen -> für alle Räume gleich)
    - Pflanze aus Inventar löschen 
    - Pflanze per Drag and Drop in Raum Grid platzieren
        - dabei Feedback ob guter/schlechter Standort
## Pflanzen
### Übersicht
- Liste aller Pflanzen, die einem gehören (sowohl platzierte als auch unplatzierte)
    - durchsuchbar nach Name/Spezies
- Neue Pflanze erstellen (wie oben in Raum-Einzelansicht)
### Einzelansicht (Navigation: Raum>Pflanze)
- alle Properties anzeigen
    - Name, Spezies, Bild (wenn kein eigenes, das Default aus der Datenbank)
- Adaptionen erlauben
    - Intervalle für AssignmentsScreen (individuell anpassen)
    - Notizen zur Pflanze
- jeweiliges Datum für nächstes Todo pro Kategorie (Gieß-Umtopf-Schnitt-Düng) anzeigen
- für eine Kategorie sagen, dass man schon erledigt hat (unabhängig von einem Todo)
## Aufgabenverwaltung
### Übersicht
- AssignmentsScreen abhaken
    - rückwirkend für Datum
- Tägliche Benachrichtigung über AssignmentsScreen für diesen Tag
