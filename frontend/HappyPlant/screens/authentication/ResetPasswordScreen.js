import React, { useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Alert, Text, StyleSheet, Platform} from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';
import axios from 'axios';
import { API_URL } from '../../config';
import Feather from "react-native-vector-icons/Feather";

const ResetPasswordScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (route.params && route.params.email) {
            setEmail(route.params.email);
        }
    }, [route.params]);

    const handleResetPassword = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/password/reset`, {
                email: email
            });
            if (response.status === 200) {
                const resetPasswordToken = response.data.resetPasswordToken;
                navigation.navigate('Passwort ändern', { resetPasswordToken });
                //navigation.replace('ResetPasswordSuccess');
            } else {
                Alert.alert('Fehler', response.status.toString() || 'Unbekannter Fehler');
            }
        } catch (error) {
            console.error('Fehler beim Zurücksetzen des Passworts:', error);
            Alert.alert('Fehler', 'Es ist ein Fehler beim Zurücksetzen des Passworts aufgetreten.');
        }
    };

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, Platform.OS === 'android' ? null : styles.backButton2]}>
                    <Feather name={Platform.OS === 'android' ? "arrow-left" : "chevron-left"} color="black" size={30}/>
                    <Text style={{fontSize: 18}}>{Platform.OS === 'android' ? "" : "Einstellungen"}</Text>
                </TouchableOpacity>
            )
        })
    });

    return (
        <View style={commonStyles.container}>
            <View style={styles.background}>
                <Text style={styles.text}> Gib hier deine E-Mail Adresse ein, um dein Passwort zurückzusetzen. </Text>
                <Text style={styles.text2}> E-Mail </Text>
                <TextInput style={styles.input}
                    placeholder=""
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => navigation.replace('Registrieren')}>
                    <Text style={styles.button2Text}>Konto erstellen</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Passwort zurücksetzen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        textAlign: 'center',
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
        top: -40,
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
    button2Text: {
        top: 30,
        color: '#9D9B9B',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
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
    background: {
        backgroundColor: 'white',
        top: -60,
        height: 230,
        borderRadius: 20,
        width: 360,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    backButton2: {
        marginLeft: -15,
    }
});
export default ResetPasswordScreen;