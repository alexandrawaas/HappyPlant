import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, Image} from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';
import axios from 'axios';
import { API_URL } from '../../config';
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync';


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
            if (response.success) {
                navigation.replace('RegisterSuccess');
            } else {
                Alert.alert('Fehler', response.message);
            }
        } catch (error) {
            console.error('Fehler bei der Registrierung:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler bei der Registrierung aufgetreten.');
        }
    };

    return (
        <View style={commonStyles.container}>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: '#BEF5B5', height: 500, borderRadius: 60, top: -40}} />
            <Image source={require('../../assets/register.jpg')} style={styles.img}/>
            <Text style={styles.text}>Registrierung</Text>
            <View style={styles.background} >
                <Text style={styles.text2}> E-Mail </Text>
                <TextInput
                    placeholder=""
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.input}
                />
                <Text style={styles.text2}> Passwort </Text>
                <TextInput
                    placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.input}
                />
                <Text style={styles.text2}> Passwort bestätigen </Text>
                <TextInput
                    placeholder=""
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Anmelden')}>
                    <Text style={styles.button2Text}>Ich habe schon einen Account</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrieren</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({

    text: {
        fontSize: 30,
        marginBottom: 60,
        top: 180,
    },

    img: {
        top: 170,
        height: 250,
        width: 250,
        marginTop: -300,
        borderRadius: 60,
    },

    input: {
        width: '80%',
        marginTop: 5,
        marginBottom: 10,

        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#FDFBEF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.2,
        shadowRadius: 1,
        elevation: 3,
    },

    button:{
        top: 180,
        elevation: 5,
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.5,
        shadowRadius: 2,
    },

    buttonText: {
        color: 'black',
        fontSize: 18,
    },

    button2Text: {
        marginTop: 10,
        color: '#9D9B9B',
        fontSize: 16,
        textDecorationLine: 'underline',
        left: 50
    },

    background: {
        top: 150,
        backgroundColor: 'white',
        height: 300,
        borderRadius: 20,
        width: 360,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text2: {
        marginTop: 5,
        marginBottom: -3,
        margin: 3,
        color: '#233D0C',
        zIndex: 1,
        textAlign: 'left',
        width: '100%',
        marginLeft: 80,
    }
});

export default RegisterScreen;
