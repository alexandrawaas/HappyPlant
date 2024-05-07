import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text } from 'react-native';
import { commonStyles } from '../../utils/CommonStyles';
import axios from 'axios';
import { API_URL } from '../../config';

const ResetPasswordScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (route.params && route.params.email) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleResetPassword = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/password/reset`, {
                email: email
            });
            if (response.data.success) {
                const resetPasswordToken = response.data.data.resetPasswordToken;
                navigation.navigate('Passwort ändern', { resetPasswordToken });
            } else {
                Alert.alert('Fehler', response.data.message);
            }
        } catch (error) {
            console.error('Fehler beim Zurücksetzen des Passworts:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Zurücksetzen des Passworts aufgetreten.');
        }
    };

    return (
        <View style={commonStyles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={commonStyles.input}
            />
            <TouchableOpacity style={commonStyles.button} onPress={handleResetPassword}>
                <Text style={commonStyles.buttonText}>Passwort zurücksetzen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ResetPasswordScreen;