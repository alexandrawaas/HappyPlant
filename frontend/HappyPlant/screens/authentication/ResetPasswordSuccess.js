import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {commonStyles} from "../../utils/styles/CommonStyles";
import React from "react";

const ResetPasswordSuccess = ({ navigation }) => {
    return (
        <View style={commonStyles.container}>
            <Text style={styles.title}>Geschafft!</Text>
            <View style={styles.background}>
                <Text style={styles.text}> Wir haben eine Nachricht an deine E-Mail Adresse gesendet. Du erhältst in Kürze weitere Anweisungen zum Zurücksetzen deines Passworts.
                    Bitte überprüfe auch deinen Spam-Ordner, falls du die E-Mail nicht sofort siehst. </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainApp')}>
                <Text style={styles.buttonText}>Danke</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: '#BEF5B5',
        padding: 40,
        paddingTop: 120,
        borderRadius: 20,
        width: '100%',
        textAlign: 'center',
        top: -290,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        top: 20,
        width: '80%',
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#FDFBEF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    button: {
        top: Platform.OS === 'ios' ? -100 : -80,
        zIndex: 1,
        elevation: 5,
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
    background: {
        backgroundColor: 'white',
        top: -100,
        height: 230,
        borderRadius: 20,
        width: 360,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default ResetPasswordSuccess;