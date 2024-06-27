import React, { useState, useEffect, useCallback } from 'react';
import { Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync';
import { fetchURL } from '../../utils/ApiService';
import LoginRegisterTemplate from './LoginRegisterTemplate';
import LoginRegiserInputField from './LoginRegisterInputField';


const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [expoPushToken, setExpoPushToken] = useState();
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const validateEmail = (inputEmail) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(inputEmail).toLowerCase());
    }

    const validatePassword = (inputPassword) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\- ]).{8,}$/;
        return re.test(String(inputPassword));
    };

    useEffect(() => {
        setIsValidEmail(validateEmail(email));
        setIsValidPassword(validatePassword(password));
    }, [email, password]);

    const handleBlur = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', handleBlur);
        return unsubscribe;
    }, [navigation]);

    const handleRegister = useCallback(async () => {
        try {
            if (!isValidEmail) {
                Alert.alert('Fehler', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                return;
            }

            if (!isValidPassword) {
                Alert.alert('Fehler', 'Das Passwort muss mindestens 8 Zeichen lang sein und mindestens einen Kleinbuchstaben, einen Großbuchstaben, eine Zahl und ein Sonderzeichen enthalten.');
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert('Fehler', 'Passwort und Bestätigungspasswort stimmen nicht überein.');
                return;
            }

            await registerForPushNotificationsAsync()
                .then(
                    (token) => { setExpoPushToken(token); }
                );
                
            const payload = {
                email: email,
                password: password,
                pushNotificationToken: expoPushToken
            }

            fetchURL('/auth/register', 'POST', payload, navigation, (data) => {
                if (data && data.status === 201) {
                    navigation.replace('RegisterSuccess');
                } else {
                    Alert.alert('Fehler', data.message || 'Registrierung fehlgeschlagen');
                }
            }, needsAuth = false)
        } catch (error) {
            console.error('Fehler bei der Registrierung:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler bei der Registrierung aufgetreten.');
        }
    }, [email, password, confirmPassword])

    return (
        <LoginRegisterTemplate 
            title='Registrierung' 
            navigation={navigation} 
            onSubmit={handleRegister} 
            submitButtonText='Registrieren' 
            imageSource={require('../../assets/register.jpg')}
        >
            <LoginRegiserInputField label={'E-Mail'} value={email} onChange={setEmail} keyboardType='email-address' />
            <LoginRegiserInputField label={'Passwort'} value={password} onChange={setPassword} password />
            <LoginRegiserInputField label={'Passwort bestätigen'} value={confirmPassword} onChange={setConfirmPassword} password />

            <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Anmelden')}>
                <Text style={styles.subButtonText}>Ich habe schon einen Account</Text>
            </TouchableOpacity>
        </LoginRegisterTemplate>
    );

};


const styles = StyleSheet.create({
    subButton: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    subButtonText: {
        marginTop: 10,
        color: '#9D9B9B',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default RegisterScreen;
