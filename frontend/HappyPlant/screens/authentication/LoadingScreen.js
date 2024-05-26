import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getAuthToken, removeAuthToken } from '../../utils/AuthTokenUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../../config';

const LoadingScreen = ({ navigation }) => {
    useEffect(() => {
        checkFlags();
    }, []);

    const checkFlags = async () => {
        console.log("Loading...")
        try {
            const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
            if (!hasOnboarded) {
                navigation.replace('OnboardingStack');
                return;
            }

            const rememberMeValue = 
                typeof window !== 'undefined' && window.localStorage ?
                window.localStorage.getItem('rememberMe') :
                await AsyncStorage.getItem('rememberMe');

            if (rememberMeValue === 'true') {
                const authToken = await getAuthToken();
                if (authToken) {
                    const response = await axios.get(`${API_URL}/user`, {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    });
                    if (response.success) {
                        navigation.replace('Home');
                    } else {
                        await removeAuthToken();
                        navigation.replace('Anmelden');
                        return;
                    }
                } else {
                    navigation.replace('Anmelden');
                    return;
                }
            } else {
                navigation.replace('Anmelden');
                return;
            }
        } catch (error) {
            navigation.replace('Anmelden');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default LoadingScreen;
