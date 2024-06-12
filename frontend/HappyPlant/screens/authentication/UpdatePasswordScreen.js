import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text } from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';
import axios from 'axios';
import { API_URL } from '../../config';

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
            if (response.ok) {
                Alert.alert('Erfolgreich', 'Passwort erfolgreich aktualisiert.');
                navigation.navigate('Anmelden');
            } else {
                Alert.alert('Fehler', response.message);
            }
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Passworts:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Aktualisieren des Passworts aufgetreten.');
        }
    };

    return (
        <View style={commonStyles.container}>
            <TextInput
                placeholder="Code"
                value={resetPasswordCode}
                onChangeText={setResetPasswordCode}
                style={commonStyles.input}
            />
            <TextInput
                placeholder="Passwort"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
                style={commonStyles.input}
            />
            <TextInput
                placeholder="Passwort bestätigen"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                style={commonStyles.input}
            />
            <TouchableOpacity style={commonStyles.button} onPress={handleUpdatePassword}>
                <Text style={commonStyles.buttonText}>Passwort aktualisieren</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UpdatePasswordScreen;