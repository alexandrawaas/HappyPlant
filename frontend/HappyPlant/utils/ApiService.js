import { API_URL } from "../config";
import { getAuthToken } from "./AuthTokenUtil";

export const fetchURL = async (url, method='GET', payload=null, callback, needsAuth=true) => {
    try {
        let authToken
        if(needsAuth) {
            console.log('trying to retrieve auth token', needsAuth)
            authToken = await getAuthToken();
        }
        const options = {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            method: method,
        };

        if (payload) {
            options.body = JSON.stringify(payload);
        };

        const response = await fetch(`${API_URL}${url}`, options);

        if (response.ok) {
            const data = await response.json();
            if (data.error) {
                console.log('error: ', data);
                window.alert(data.error);
                callback([]);
            } else {
                callback(data);
            }
        } else {
            console.error('Fehler beim Abrufen der Daten:', response.status);
            callback([]);
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        window.alert('Fehler beim Abrufen der Daten');
        callback([]);
    }
}
