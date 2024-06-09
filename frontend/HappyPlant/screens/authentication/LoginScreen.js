import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Switch,
    StyleSheet,
    Image,
    Platform
} from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { saveAuthToken } from '../../utils/AuthTokenUtil';
import { API_URL } from '../../config';
import ResetPasswordScreen from "./ResetPasswordScreen";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleBlur = () => {
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', handleBlur);
        return unsubscribe;
    }, [navigation]);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email, password });
            if (response.data.success) {
                const authToken = response.data.data.authToken;
                await saveAuthToken(authToken);
                if (rememberMe) {
                    await AsyncStorage.setItem('rememberMe', 'true');
                } else {
                    await AsyncStorage.removeItem('rememberMe');
                }
                navigation.replace('MainApp');
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
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: '#BEF5B5', height: 500, borderRadius: 60, top: -40}} />
            <Image source={require('../../assets/login.jpg')} style={styles.img}/>
            <Text style={styles.text}>Login</Text>
            <View style={styles.background}>
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
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Passwort zurücksetzen', { email })}>
                      <Text style={styles.button2Text}>Passwort vergessen?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}  onPress={() => navigation.navigate('Registrieren')}>
                        <Text style={styles.button2Text}>Konto erstellen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginBottom: 60,
        top: 130,
    },
    img: {
        top: 120,
        height: 250,
        width: 250,
        marginTop: -300,
        borderRadius: 60,
    },
    input: {
        top: 20,
        width: '80%',
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#FDFBEF',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    button: {
        top: Platform.OS === 'ios' ? 100 : 80,
        zIndex: 1,
        elevation: 5,
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
    button2Text: {
        top: -15,
        color: '#9D9B9B',
        fontSize: 16,
        textDecorationLine: 'underline',
        left: 50,
    },
    background: {
        top: 120,
        backgroundColor: 'white',
        height: 320,
        borderRadius: 20,
        width: 360,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: {
        top: 20,
        marginTop: 5,
        marginBottom: -3,
        margin: 3,
        color: '#233D0C',
        zIndex: 1,
        textAlign: 'left',
        width: '100%',
        marginLeft: 80,
    },

    row: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,

    },

    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    toggle: {
        marginRight: 10,
    },
    toggleText: {
        fontSize: 16,
        color: '#233D0C',
    }
});

export default LoginScreen;