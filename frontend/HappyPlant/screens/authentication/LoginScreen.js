import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import { commonStyles } from '../../utils/CommonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '@env';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        checkRememberMe();
    }, []);

    const checkRememberMe = async () => {
        try {
            const rememberMeValue = await AsyncStorage.getItem('rememberMe');
            if (rememberMeValue === 'true') {
                const authToken = await AsyncStorage.getItem('authToken');
                if (authToken) {
                    const response = await axios.get(`${API_URL}/user`, {
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    });
                    if (response.data.success) {
                        navigation.replace('Assignments');
                    } else {
                        await AsyncStorage.removeItem('authToken');
                        await AsyncStorage.removeItem('rememberMe');
                    }
                }
            }
        } catch (error) {
            console.error('Fehler beim Überprüfen des angemeldeten Benutzers:', error);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email: email,
                password: password
            });
            if (response.data.success) {
                const authToken = response.data.data.authToken;
                await AsyncStorage.setItem('authToken', authToken);
                if (rememberMe) {
                    await AsyncStorage.setItem('rememberMe', 'true');
                } else {
                    await AsyncStorage.removeItem('rememberMe');
                }
                navigation.replace('Aufgaben');
            } else {
                Alert.alert('Fehler', response.data.message);
            }
        } catch (error) {
            console.error('Fehler beim Login:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Login aufgetreten.');
        }
    };

    return (
        <View style={commonStyles.container}>
            <Text>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={commonStyles.input}
            />
            <TextInput
                placeholder="Passwort"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={commonStyles.input}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                    value={rememberMe}
                    onValueChange={setRememberMe}
                />
                <Text>automatisch anmelden</Text>
            </View>
            <TouchableOpacity style={commonStyles.button} onPress={handleLogin}>
                <Text style={commonStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Button title="Password vergessen?" onPress={() => navigation.navigate('ResetPassword')} />
            <Button title="Du hast noch keinen Account? Hier registrieren!" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default LoginScreen;