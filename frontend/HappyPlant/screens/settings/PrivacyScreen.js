import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PrivacyScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionHeader}>1. Einleitung</Text>
            <Text style={styles.paragraph}>
                Wir freuen uns über Ihr Interesse an unserer App. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig.
                Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </Text>

            <Text style={styles.sectionHeader}>2. Verantwortliche Stelle</Text>
            <Text style={styles.paragraph}>
                Verantwortliche Stelle für die Datenverarbeitung ist:
                {'\n'}Mustermann GmbH
                {'\n'}Musterstraße 1
                {'\n'}12345 Musterstadt
                {'\n'}Deutschland
                {'\n'}E-Mail: info@mustermann.de
            </Text>

            <Text style={styles.sectionHeader}>3. Erhebung und Speicherung personenbezogener Daten</Text>
            <Text style={styles.paragraph}>
                Bei der Nutzung unserer App erheben wir verschiedene Arten von personenbezogenen Daten. Dies umfasst unter anderem:
                {'\n'}- Kontaktdaten (z.B. E-Mail-Adresse)
                {'\n'}- Nutzungsdaten (z.B. Zugriffszeiten, genutzte Funktionen)
                {'\n'}- Gerätedaten (z.B. IP-Adresse, Betriebssystem)
            </Text>

            <Text style={styles.sectionHeader}>4. Verwendung von Daten</Text>
            <Text style={styles.paragraph}>
                Wir verwenden Ihre Daten zu folgenden Zwecken:
                {'\n'}- Bereitstellung der App-Funktionen
                {'\n'}- Verbesserung und Weiterentwicklung der App
                {'\n'}- Kommunikation mit den Nutzern
            </Text>

            <Text style={styles.sectionHeader}>5. Weitergabe von Daten</Text>
            <Text style={styles.paragraph}>
                Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn:
                {'\n'}- Sie Ihre ausdrückliche Einwilligung gegeben haben
                {'\n'}- dies zur Erfüllung unserer vertraglichen Pflichten erforderlich ist
                {'\n'}- eine gesetzliche Verpflichtung besteht
            </Text>

            <Text style={styles.sectionHeader}>6. Ihre Rechte</Text>
            <Text style={styles.paragraph}>
                Sie haben das Recht:
                {'\n'}- Auskunft über Ihre bei uns gespeicherten Daten zu erhalten
                {'\n'}- Berichtigung unrichtiger Daten zu verlangen
                {'\n'}- Löschung Ihrer Daten zu verlangen
                {'\n'}- Einschränkung der Datenverarbeitung zu verlangen
                {'\n'}- Datenübertragbarkeit zu verlangen
                {'\n'}- Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen
            </Text>

            <Text style={styles.sectionHeader}>7. Kontakt</Text>
            <Text style={styles.paragraph}>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigungen,
                Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie sich bitte an:
                {'\n'}E-Mail: datenschutz@mustermann.de
            </Text>

            <Text style={styles.sectionHeader}>8. Änderungen dieser Datenschutzerklärung</Text>
            <Text style={[styles.paragraph, {marginBottom: 150}]}>
                Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen
                Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der
                Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 24,
    },
});
