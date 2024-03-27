# Projekt Idee

## Raw
- Pflanzendatenbank mit ca 30 Pflanzen mit je einem Default Bild und deren Daten selbst anlegen, User kann andere Pflanzenarten hinzufügen
- Tägliche Benachrichtigung mit einstellbarer Uhrzeit: To-Do-Liste mit Aufgaben (Gießen, Düngen Umtopfen prüfen, Schneiden prüfen)  für diesen Tag, Möglichkeit die Aufgaben gruppenweise abzuhaken (z.B. alles Gießen erledigt)
- Im Pflanzenprofil: Daten für nächstes Gießen, nächstes Umtopfen usw.
- Pflanzenprofil: Bild (wenn kein eigenes, das Default aus der Datenbank), Name, Pflanzenart aus der Datenbank, Intervalle für Aufgaben individuell anpassen, Notizen zur Pflanze, Anforderungen Luftfeuchtigkeit und Temperatur
- Beim Anlegen einer Pflanze: letztes Gießen, Umtopfen usw. angeben, darauf basieren dann neue Termine
- Aufgaben rückwirkend für ein vergangenes Datum abhaken
- Überfällige Aufgaben markieren
- Farben für verschiedene Aufgabenarten; überfällige sind immer rot
- To-Do-Listen Ansicht, optional Sortierbar (Art der Aufgabe, Fälligkeit, Raum)
- Raumansicht mit Aufgaben pro Raum
- Erstellen eines Raumes: Name, Seitenverhältnis (Es gibt nur rechteckige Räume), Fenster platzieren (Skala erscheint erst, wenn das Fenster final platziert wurde), Luftfeuchtigkeit, Temperatur; Himmelsrichtung: Der Raum wird immer mit der kürzeren Seite nach oben auf dem Bildschirm angezeigt. Der User wählt aus, welche Himmelsrichtung da oben ist (mit einem Scrollrad N, NO, O, SO, ...) und die anderen werden dementsprechend berechnet
- Raumansicht: Wenn mehr als eine Pflanze am selben Ort steht, ein "Array" anzeigen als Popup, wenn man darauf klickt
- Raumansicht: Oben Raum, unten "Probleme" mit Ausrufezeichen, z.B. "Horst steht zu hell" --> man will diese Probleme lösen; To Dos auch so aber mit keinem Ausrufezeichen sondern anderen Icons
- Raumansicht: Noch nicht plazierte Pflanzen in einem Inventar für diesen Raum, man kann über "Hinzufügen" weitere Pflanzen aus seinem Besitz hinzufügen
- Raumübersicht: Liste mit Kacheln, die sich automatisch schön platzieren :), Icon für "Hier gibt es Probleme" und "Hier gibt es To-Dos"
- Optional: Im Lexikon filtern, Gießintervall abhängig von Helligkeit des Standortes; Jahreszeitenabhängige Platzierungsempfehlungen (Luftfeuchte, Temperatur, Sonnigkeit im Sommer usw) und Benachrichtigungen dafür (zB Pflanzen aus dem Wintergarten wenn es kalt wird, oder raus wenn es warm wird); Welche Pflanze passt zu meinem Raum?, Achievements, Forum, Statistik
- Pflanzenlexikon: Daten aus der Pflanzendatenbank anzeigen; Funktion "Diese Pflanze zu meinem Haushalt hinzufügen"

## Fragen und Probleme
- Machen wir einen Account mit Authentifizierung oder speichern wir alles Lokal und lassen es über ID / Token übertragen
    - Account wäre realsitischer
- Machen wir eine PWA oder machen wir eine App mit React Native? PWA lassen sich in iOS nicht installieren, daher dann Probleme mit dem Benachrichtigungen schicken
    - React Native mit JavaScript
- Backend Framework?
    - Spring Boot mit Kotlin