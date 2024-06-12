import { API_URL } from "../config";
import { getAuthToken } from "./AuthTokenUtil";

const token = `
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGFtcGxlLnVzZXJAdGVzdC5jb20iLCJleHAiOjE3MTYwMTgyNjIsInVzZXJJZCI6IjI3OWU3MmJiLWZkOWEtNDNlNy05ODcxLTFjZWU3ODdhMGRjOCIsImlhdCI6MTcxNjAxNTY3MH0.xD2Ytcg5SXtKKmi7K6N2l8sef1kqbxvA5hts3RPH8b9WN5gDLv56SBumB58Gk6yFbATIYVJAN27Rcrz5dKDvMg`

export const fetchURL = async (url, method='GET', payload=null, callback) => {
    try {
        const authToken = await getAuthToken();
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

// export default fetchURL;