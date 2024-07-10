import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { commonStyles } from '../../utils/styles/CommonStyles';
import axios from 'axios';
import { API_URL } from '../../config';

const RegisterSuccess = ({ navigation, route }) => {
    const [verifyEmailCode, setVerifyEmailCode] = useState('');

    const handleEmailVerification = async () => {
        console.log(route.params.email)
        console.log(verifyEmailCode)
        try {
            const response = await axios.post(`${API_URL}/auth/verify`, {
                email: route.params.email,
                verifyEmailOtp: verifyEmailCode,
            });
            if (response.status === 200) {
                Alert.alert('Erfolgreich', 'Deine E-Mail-Adresse wurde verifiziert.');
                navigation.replace('Anmelden');
            } else {
                Alert.alert('Fehler', response.data);
            }
        } catch (error) {
            console.error('Fehler beim Verifizieren der E-Mail-Adresse:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Verifizieren der E-Mail-Adresse aufgetreten.');
        }
    }

    return (
        <View style={commonStyles.container}>

            <View style={styles.background}>
                <Text style={styles.text}>
                    Bitte überprüfe Dein E-Mail-Postfach und gib den Code aus der Verifizierungs-E-Mail ein, um Deine E-Mail-Adresse zu verifizieren und die Registrierung abzuschließen.
                </Text>
                <TextInput
                    placeholder="Code"
                    value={verifyEmailCode}
                    onChangeText={setVerifyEmailCode}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleEmailVerification}
            >
                <Text style={styles.buttonText}>Verifizieren</Text>
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
    input: {
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
});

export default RegisterSuccess;
