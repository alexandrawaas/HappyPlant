import React from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LogoutScreen = ({ navigation }) => {
    const handleLogout = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            if (!accessToken) {
                Alert.alert('Fehler', 'Kein AccessToken gefunden.');
                return;
            }

            const response = await axios.post('http://localhost:8080/auth/logout', null, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (response.data.success) {
                await AsyncStorage.removeItem('accessToken');
                navigation.replace('Login');
            } else {
                Alert.alert('Fehler', response.data.message);
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
