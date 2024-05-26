import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ImprintScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.sectionHeader}>Angaben gemäß § 5 TMG</Text>
            <Text style={styles.paragraph}>
                Mustermann GmbH
                {'\n'}Musterstraße 1
                {'\n'}12345 Musterstadt
                {'\n'}Deutschland
            </Text>

            <Text style={styles.sectionHeader}>Vertreten durch:</Text>
            <Text style={styles.paragraph}>
                Max Mustermann
            </Text>

            <Text style={styles.sectionHeader}>Kontakt:</Text>
            <Text style={styles.paragraph}>
                Telefon: +49 123 456789
                {'\n'}Telefax: +49 123 456780
                {'\n'}E-Mail: info@mustermann.de
            </Text>

            <Text style={styles.sectionHeader}>Registereintrag:</Text>
            <Text style={styles.paragraph}>
                Eintragung im Handelsregister.
                {'\n'}Registergericht: Musterstadt
                {'\n'}Registernummer: HRB 12345
            </Text>

            <Text style={styles.sectionHeader}>Umsatzsteuer-ID:</Text>
            <Text style={styles.paragraph}>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                {'\n'}DE 123456789
            </Text>

            <Text style={styles.sectionHeader}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</Text>
            <Text style={styles.paragraph}>
                Max Mustermann
                {'\n'}Musterstraße 1
                {'\n'}12345 Musterstadt
            </Text>

            <Text style={styles.sectionHeader}>Haftungsausschluss (Disclaimer):</Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold}>Haftung für Inhalte</Text>
                {'\n'}Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                {'\n'}Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </Text>

            <Text style={styles.sectionHeader}>Haftung für Links</Text>
            <Text style={styles.paragraph}>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
                {'\n'}Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </Text>

            <Text style={styles.sectionHeader}>Urheberrecht</Text>
            <Text style={[styles.paragraph, {marginBottom: 150}]}>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
                gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                Gebrauch gestattet.
                {'\n'}Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
    bold: {
        fontWeight: 'bold',
    },
});
