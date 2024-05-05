import React from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getAuthToken } from '../../utils/AuthTokenUtil';

const LogoutScreen = ({ navigation }) => {
    const handleLogout = async () => {
        try {
            const authToken = await getAuthToken();
            const response = await axios.post(`${process.env.API_URL}/auth/logout`, null, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });

            if (response.data.success) {
                await AsyncStorage.removeItem('authToken');
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
