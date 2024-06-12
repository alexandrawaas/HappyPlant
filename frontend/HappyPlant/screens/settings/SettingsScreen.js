import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, Image, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { removeAuthToken } from '../../utils/AuthTokenUtil';
import { fetchURL } from '../../utils/ApiService'
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync';

export default function SettingsScreen({ navigation }) {
    const [remindersEnabled, setRemindersEnabled] = useState(false);
    const [notificationTime, setNotificationTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [user, setUser] = useState(null);
    const [expoPushToken, setExpoPushToken] = useState();

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            updateNotificationSettings();
            navigation.dispatch(e.data.action);
        });

        fetchUserData();

        return () => {
            unsubscribe();
        };
    }, []);


    const fetchUserData = async () => {
        fetchURL('/user', 'GET', null, (data) => {
            if (data) {
                setUser(data);
                setRemindersEnabled(data.receivePushNotifications);
                const time = new Date(data.pushNotificationsTime);
                if (!isNaN(time.getTime())) {
                    setNotificationTime(time);
                }
            }
        });
    };

    const updateNotificationSettings = async () => {
        await registerForPushNotificationsAsync()
        .then(
            (token) => { setExpoPushToken(token); }
        );

        const payload = {
            receivePushNotifications: remindersEnabled,
            pushNotificationsTime: notificationTime.toISOString().substring(11, 16),
            pushNotificationToken: expoPushToken
        };
        fetchURL('/user', 'PATCH', payload, (data) => {
            if (!data) {
                console.error('Fehler beim Aktualisieren der Benachrichtigungseinstellungen');
            }
        });
    };
    
    const handleAction = async (endpoint, method, successMessage) => {
        fetchURL(endpoint, method, null, async () => {
            await removeAuthToken();
            navigation.replace('OnboardingStack', { screen: 'Anmelden' });
            Alert.alert('Erfolg', successMessage);
        });
    };

    const confirmAction = (action, handleAction) => {
        let message = '';
        switch (action) {
            case 'Abmelden':
                message = 'Möchten Sie sich wirklich abmelden?';
                break;
            case 'Konto löschen':
                message = 'Möchten Sie Ihr Konto wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.';
                break;
            default:
                message = `Möchten Sie wirklich ${action.toLowerCase()}?`;
        }

        Alert.alert(
            `${action} bestätigen`,
            message,
            [
                {
                    text: 'Abbrechen',
                    style: 'cancel'
                },
                {
                    text: action,
                    onPress: handleAction
                }
            ]
        );
    };

    const onTimeChange = (event, selectedTime) => {
        if (event.type === 'dismissed') {
            setShowTimePicker(false);
            return;
        }
        const currentTime = selectedTime || notificationTime;
        if (!isNaN(currentTime.getTime())) {
            setNotificationTime(currentTime);
        }
        setShowTimePicker(Platform.OS === 'ios');
        setNotificationTime(currentTime);
    };

    const showPicker = () => {
        setShowTimePicker(true);
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View styles={styles.emailContainer}>
                    {user && ( <Text style={styles.userInfoText}>{user.email}</Text>)}
                </View>
                <View style={styles.settingsContainer}> 
                    <Text style={styles.sectionHeader}>Benachrichtigungen</Text>
                    <View style={styles.areaContainer}>
                        <View style={[styles.settingRow, styles.bottomBorder]}>
                            <Text style={styles.settingText}>Erinnerungen</Text>
                            <Switch
                                value={remindersEnabled}
                                onValueChange={setRemindersEnabled}
                            />
                        </View>
                        <View style={styles.settingRow}>
                            <Text style={styles.settingText}>Uhrzeit</Text>
                            {Platform.OS === 'ios' ? (
                                <DateTimePicker
                                    value={notificationTime}
                                    mode="time"
                                    is24Hour={true}
                                    display="default"
                                    onChange={onTimeChange}
                                />
                            ) : (
                                <TouchableOpacity onPress={showPicker}>
                                    <Text style={styles.settingText}>{notificationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                                </TouchableOpacity>
                            )}
                            {showTimePicker && Platform.OS === 'android' && (
                                <DateTimePicker
                                    value={notificationTime}
                                    mode="time"
                                    is24Hour={true}
                                    display="spinner"
                                    onChange={onTimeChange}
                                />
                            )}
                        </View>
                    </View>

                    <Text style={styles.sectionHeader}>Benutzerkonto</Text>
                    <View style={styles.areaContainer}>
                        <TouchableOpacity 
                            style={[styles.button, styles.bottomBorder]} 
                            onPress={() => navigation.navigate('OnboardingStack', { screen: 'Passwort zurücksetzen' })}
                        >
                            <Text style={styles.settingText}>Passwort zurücksetzen</Text>
                            <Image source={require('../../assets/arrow_right.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.button, styles.bottomBorder]} 
                            onPress={() => confirmAction('Abmelden', () => handleAction('/auth/logout', 'post', 'Erfolgreich abgemeldet'))}
                        >
                            <Text style={styles.settingText}>Abmelden</Text>
                            <Image source={require('../../assets/arrow_right.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => confirmAction('Konto löschen', () => handleAction('/user', 'delete', 'Konto erfolgreich gelöscht'))}
                        >
                            <Text style={styles.settingText}>Konto löschen</Text>
                            <Image source={require('../../assets/arrow_right.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.sectionHeader}>Informationen</Text>
                    <View style={styles.areaContainer}>
                        <TouchableOpacity style={[styles.button, styles.bottomBorder]} onPress={() => navigation.navigate("Datenschutz")}>
                            <Text style={styles.settingText}>Datenschutz</Text>
                            <Image source={require('../../assets/arrow_right.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Impressum")}>
                            <Text style={styles.settingText}>Impressum</Text>
                            <Image source={require('../../assets/arrow_right.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        padding: 30,
    },
    container: {
       alignItems: 'center',
    },
    emailContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsContainer: {
        marginTop: 20,
        width: '100%'
    },
    sectionHeader: {
        lineHeight: 24,
        fontSize: 20,
        fontWeight: 'regular',
        color: '#9f9d9d',
        marginBottom: 8,
    },
    areaContainer: {
        borderRadius: 12,
        backgroundColor: '#fdfbef',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    settingRow: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    settingText: {
        fontSize: 15,
    },
    todoText: {
        fontSize: 15,
        color: '#008000',
    },
    timeInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        width: 60,
        textAlign: 'center',
    },
    button: {
        height: 50,
        backgroundColor: '#fdfbef',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#b1b0a5'
    },
    userInfoText: {
        lineHeight: 24,
        fontSize: 20,
        fontWeight: 'regular',
    },
});