import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Switch,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveAuthToken } from '../../utils/AuthTokenUtil';
import { fetchURL } from '../../utils/ApiService';
import LoginRegisterTemplate from './LoginRegisterTemplate';
import LoginRegiserInputField from './LoginRegisterInputField';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('example.user@test.com');
    const [password, setPassword] = useState('s3cur3P455w0rd');
    const [rememberMe, setRememberMe] = useState(false);

    const handleBlur = () => {
        setEmail('');
        setPassword('');
    };

    // useEffect(() =>{
    //     handleLogin()
    // },[])

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', handleBlur);
        return unsubscribe;
    }, [navigation]);

    const handleLogin = async () => {
        try {
            const payload = {
                email: email,
                password: password
            };
    
            fetchURL('/auth/login', 'POST', payload, null, async (data) => {
                if (data && data.authToken) {
                    const authToken = data.authToken;
                    await saveAuthToken(authToken);
                    if (rememberMe) {
                        await AsyncStorage.setItem('rememberMe', 'true');
                    } else {
                        await AsyncStorage.removeItem('rememberMe');
                    }
                    navigation.replace('MainApp');
                } else {
                    Alert.alert('Fehler', data.message || 'Login fehlgeschlagen');
                }
            }, needsAuth = false);
        } catch (error) {
            console.error('Fehler beim Login:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Login aufgetreten.');
        }
    };

    return (
        <LoginRegisterTemplate
            title='Anmeldung'
            navigation={navigation}
            onSubmit={handleLogin}
            submitButtonText='Anmelden'
            imageSource={require('../../assets/login.jpg')}
        >
            <LoginRegiserInputField label='E-Mail' value={email} onChange={setEmail} keyboardType='email-address' />
            <LoginRegiserInputField label='Passwort' value={password} onChange={setPassword} password />

            <View style={styles.toggleContainer}>
                <Switch
                    style={styles.toggle}
                    value={rememberMe}
                    onValueChange={setRememberMe}
                    trackColor={{ false: "#767577", true: "#BEF5B5" }}
                    thumbColor={rememberMe ? "white" : "#f4f3f4"}
                />
                <Text style={styles.toggleText}>automatisch anmelden</Text>
            </View>

            <View style={styles.subButtonContainer}>
                <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Passwort zurücksetzen', { email })}>
                    <Text style={styles.subButtonText}>Passwort vergessen?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Registrieren')}>
                    <Text style={styles.subButtonText}>Konto erstellen</Text>
                </TouchableOpacity>
            </View>
        </LoginRegisterTemplate>
    );
};

const styles = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    toggle: {
        marginRight: 10,
    },
    toggleText: {
        fontSize: 16,
        color: '#233D0C',
    },

    subButtonContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    subButtonText: {
        marginTop: 10,
        color: '#9D9B9B',
        fontSize: 16,
        textDecorationLine: 'underline',
    },    
});

export default LoginScreen;
