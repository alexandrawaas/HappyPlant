import { API_URL } from "../config";
import { getAuthToken } from "./AuthTokenUtil";
import { blobToBase64 } from "./BlobToBase64";

const getResponse = async (url, method='GET', payload=null, needsAuth=true) => {
    let authToken
        if(needsAuth) {
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
    return response
}

export const fetchURL = async (url, method='GET', payload=null, callback = ()=>{}, needsAuth=true) => {
    try {
        const response = await getResponse(url, method, payload, needsAuth)
        if (response.ok) {
            if(response.status === 204) {
                callback();
                return;
            }
            const data = await response.json();
            if (data.error) {
                console.error('error: ', data);
                window.alert(data.error);
                callback([]);
            } else {
                callback(data); 
            }
        } else {
            console.error(`Fehler beim Abrufen der Daten (${method} ${url}):`, response.status);
            callback([]);
        }
    } catch (error) {
        console.error(`Fehler beim Abrufen der Daten (${method} ${url}):`, error);
        window.alert('Fehler beim Abrufen der Daten');
        callback([]);
    }
}

export const fetchImage = async (url, method='GET', payload=null, callback = ()=>{}, needsAuth=true) => {
    try {
        const response = await getResponse(url, method, payload, needsAuth)
        if (response.ok) {
            const data = await response.blob();
            const base64Image = await blobToBase64(data);
            callback(base64Image);
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

export const fetchURLUploadImage =async (plantId, payload) => {
    try {
        let authToken = await getAuthToken();

        const requestOptions = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data'
            },
            body: payload,
        };

        const response = await fetch(`${API_URL}/images?plantId=${plantId}`, requestOptions);

        if (response.ok) {
            const data = await response.json();
            if (data.error) {
                console.error('error: ', data);
                window.alert(data.error);
            }
        } else {
            console.error('Fehler beim Abrufen der Daten:', response.status);
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        window.alert('Fehler beim Abrufen der Daten');
    }
}
