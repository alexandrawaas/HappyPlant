import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../utils/styles/CommonStyles';

const RegisterSuccess = ({ navigation }) => {
    return (
        <View style={commonStyles.container}>

            <View style={styles.background}>
                <Text style={styles.text}>
                    Bitte überprüfen Sie Ihr Postfach und klicken Sie auf den Bestätigungslink, um Ihre E-Mail-Adresse zu verifizieren und Ihre Registrierung abzuschließen.
                </Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Anmelden')}
            >
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        textAlign: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    background: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: '80%',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
});

export default RegisterSuccess;
