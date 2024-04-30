import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import { commonStyles } from '../../utils/CommonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                email: email,
                password: password
            });
            if (response.data.success) {
                const accessToken = response.data.data.accessToken;
                await AsyncStorage.setItem('accessToken', accessToken);
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
            <TouchableOpacity style={commonStyles.button} onPress={handleLogin}>
                <Text style={commonStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Button title="Password vergessen?" onPress={() => navigation.navigate('ResetPassword')} />
            <Button title="Du hast noch keinen Account? Hier registrieren!" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default LoginScreen;