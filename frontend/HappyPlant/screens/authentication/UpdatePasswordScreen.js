import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../config';
import * as PropTypes from "prop-types";

function ImgHeaderComponent(props) {
    return null;
}

ImgHeaderComponent.propTypes = {
    imageSource: PropTypes.any,
    header: PropTypes.string
};

const UpdatePasswordScreen = ({ navigation, route }) => {
    const [resetPasswordCode, setResetPasswordCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdatePassword = async () => {
        try {
            if (newPassword !== confirmPassword) {
                Alert.alert('Fehler', 'Passwort und Bestätigungspasswort stimmen nicht überein.');
                return;
            }

            const response = await axios.post(`${API_URL}/auth/password/update`, {
                resetPasswordToken: route.params.resetPasswordToken,
                resetPasswordCode: resetPasswordCode,
                newPassword: newPassword
            });
            if (response.status === 200) {
                Alert.alert('Erfolgreich', 'Passwort erfolgreich aktualisiert.');
                navigation.replace('Anmelden');
            } else {
                Alert.alert('Fehler', response.data);
            }
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Passworts:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Aktualisieren des Passworts aufgetreten.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image source={require('../../assets/Reset password-bro.png')} style={styles.image} resizeMode="contain" />
                <TextInput
                    placeholder="Code"
                    value={resetPasswordCode}
                    onChangeText={setResetPasswordCode}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Passwort"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Passwort bestätigen"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
                    <Text style={styles.buttonText}>Passwort aktualisieren</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 280,
        height: 280,
        borderRadius: 50,
        marginBottom: 20,
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
    button: {
        marginTop: 20,
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
        height: '75%',
        borderRadius: 20,
        width: '90%',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default UpdatePasswordScreen;
