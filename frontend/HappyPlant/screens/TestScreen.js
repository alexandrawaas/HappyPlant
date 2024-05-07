import React from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';
import { getAuthToken } from '../utils/AuthTokenUtil';
import { API_URL } from '../config';

const TestScreen = () => {
    const handleSecureEndpoint = async () => {
        try {
            const authToken = await getAuthToken();
            console.log('Auth Token:', authToken);
            const response = await axios.get(`${API_URL}/test/secure`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });

            if (response.data.message) {
                Alert.alert('Nachricht vom sicheren Endpunkt', response.data.message);
            } else {
                Alert.alert('Fehler', 'Ungültige Antwort vom sicheren Endpunkt.');
            }
        } catch (error) {
            console.error('Fehler beim Zugriff auf den sicheren Endpunkt:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Zugriff auf den sicheren Endpunkt aufgetreten.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Endpunkt testen" onPress={handleSecureEndpoint} />
        </View>
    );
};

export default TestScreen;
