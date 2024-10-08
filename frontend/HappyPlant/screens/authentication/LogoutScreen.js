import React from 'react';
import { View, Button, Alert } from 'react-native';
import axios from 'axios';
import { getAuthToken, removeAuthToken } from '../../utils/AuthTokenUtil';
import { API_URL } from '../../config';

const LogoutScreen = ({ navigation }) => {
    const handleLogout = async () => {
        try {
            const authToken = await getAuthToken();
            const response = await axios.post(`${API_URL}/auth/logout`, null, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });

            if (response.ok) {
                await removeAuthToken();
                navigation.replace('Anmelden');
            } else {
                Alert.alert('Fehler', response.data);
            }
        } catch (error) {
            console.error('Fehler beim Logout:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Logout aufgetreten.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default LogoutScreen;
