import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync';
import { fetchURL } from '../../utils/ApiService';

const FORM_HEIGHT = 300

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [expoPushToken, setExpoPushToken] = useState();
    const { height } = useWindowDimensions();

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
    };

    const imgDimension = 0.3 * height
    return (
        <View style={commonStyles.container}>
            <View style={getBackgroundElipsisStyle(height)} />
            <Image source={require('../../assets/register.jpg')} style={{...styles.img, height: imgDimension, width: imgDimension }} />
            <Text style={styles.header}>Registrierung</Text>
            <View style={[styles.formContainer, commonStyles.shadow]} >
                <Text style={styles.inputLabel}> E-Mail </Text>
                <TextInput
                    placeholder=""
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={[commonStyles.shadow, styles.input]}
                />
                <Text style={styles.inputLabel}> Passwort </Text>
                <TextInput
                    placeholder=""
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={[commonStyles.shadow, styles.input]}
                />
                <Text style={styles.inputLabel}> Passwort bestätigen </Text>
                <TextInput
                    placeholder=""
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={[commonStyles.shadow, styles.input]}
                />
                <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Anmelden')}>
                    <Text style={styles.subButtonText}>Ich habe schon einen Account</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.registerButton, commonStyles.shadow]} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Registrieren</Text>
            </TouchableOpacity>
        </View>
    );

};


const styles = StyleSheet.create({
    backgroundElipsis: {
        backgroundColor: '#BEF5B5',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    img: {
        marginTop: 20,
        borderRadius: 60,
    },
    header: {
        marginTop: 10,
        marginBottom: 30,
        fontSize: 30,
    },

    formContainer: {
        backgroundColor: 'white',
        paddingVertical: 7,
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputLabel: {
        marginTop: 5,
        marginBottom: -3,
        margin: 3,
        color: '#233D0C',
        zIndex: 1,
        textAlign: 'left',
        width: '100%',
        marginLeft: 80,
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
        elevation: 3,
    },

    subButton: {
        left: 50,
    },
    subButtonText: {
        marginTop: 10,
        color: '#9D9B9B',
        fontSize: 16,
        textDecorationLine: 'underline',
    },    

    registerButton: {
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    registerButtonText: {
        color: 'black',
        fontSize: 18,
    },
});

const getBackgroundElipsisStyle = (height) => {
    const elementHeight = 0.65 * height
    return { ...StyleSheet.absoluteFillObject, ...styles.backgroundElipsis, height: elementHeight }
}

export default RegisterScreen;
