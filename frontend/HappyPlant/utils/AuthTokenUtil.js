import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthToken = async () => {
    const authToken = await AsyncStorage.getItem('authToken');
    if (!authToken) {
        throw new Error('Kein AuthToken gefunden.');
    }
    return authToken;
};