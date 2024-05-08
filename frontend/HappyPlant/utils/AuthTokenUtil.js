import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthToken = async () => {
    let authToken;
    if (typeof window !== 'undefined' && window.localStorage) {
        authToken = window.localStorage.getItem('authToken');
    } else {
        authToken = await AsyncStorage.getItem('authToken');
    }

    if (!authToken) {
        throw new Error ('Kein AuthToken gefunden.');
    }

    return authToken;

    // const authToken = await AsyncStorage.getItem('authToken');
    // if (!authToken) {
    //     throw new Error('Kein AuthToken gefunden.');
    // }
    // return authToken;
};

export const saveAuthToken = async (authToken) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('authToken', authToken);
    } else {
        await AsyncStorage.setItem('authToken', authToken);
    }
}

export const removeAuthToken = async () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('authToken');
    } else {
        await AsyncStorage.removeItem('authToken');
    }
}