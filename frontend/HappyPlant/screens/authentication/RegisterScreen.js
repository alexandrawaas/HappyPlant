import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';
import axios from 'axios';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";
import {Platform} from 'react-native';
import { API_URL } from '../../config';


const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [expoPushToken, setExpoPushToken] = useState();

    const handleBlur = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', handleBlur);
        return unsubscribe;
    }, [navigation]);

    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                Alert.alert('Fehler', 'Passwort und Bestätigungspasswort stimmen nicht überein.');
                return;
            }

            await registerForPushNotificationsAsync()
            .then(
                (token) => { setExpoPushToken(token); }
            );

            const response = await axios.post(`${API_URL}/auth/register`, {
                email: email,
                password: password,
                pushNotificationToken: expoPushToken
            });
            if (response.data.success) {
                Alert.alert(
                    'Fast geschafft!',
                    'Wir haben eine Verifizierungs-E-Mail an Ihre Adresse gesendet. Bitte überprüfen Sie Ihren Posteingang.',
                    [{ text: 'OK', onPress: () => navigation.replace('Anmelden') }]
                );
            } else {
                Alert.alert('Fehler', response.data.message);
            }
        } catch (error) {
            console.error('Fehler bei der Registrierung:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler bei der Registrierung aufgetreten.');
        }
    };

    return (
        <View style={commonStyles.container}>
            <Text>Register</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
                autoCapitalize="none"
                style={commonStyles.input}
            />
            <TextInput
                placeholder="Passwort"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                style={commonStyles.input}
            />
            <TextInput
                placeholder="Passwort bestätigen"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                style={commonStyles.input}
            />
            <TouchableOpacity style={commonStyles.button} onPress={handleRegister}>
                <Text style={commonStyles.buttonText}>Registrieren</Text>
            </TouchableOpacity>
            <Button title="Ich habe schon einen Account" onPress={() => navigation.navigate('Anmelden')} />
        </View>
    );
};

const registerForPushNotificationsAsync = async() => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        //handleRegistrationError('Permission not granted to get push token for push notification!');
        return;
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas?.projectId,
      });

      //TODO remove log
      console.log(token);
      return token;

    } else {
        console.log("ERROR: No physical device used")
    }
  }

export default RegisterScreen;
