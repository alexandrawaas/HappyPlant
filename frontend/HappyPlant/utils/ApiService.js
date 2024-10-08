import { API_URL } from "../config";
import { getAuthToken } from "./AuthTokenUtil";
import { blobToBase64 } from "./BlobToBase64";

const getResponse = async (url, method = 'GET', payload = null, needsAuth = true) => {
    let authToken
    if (needsAuth) {
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

export const fetchURL = async (url, method = 'GET', payload = null, navigation, callback = () => { }, needsAuth = true) => {
    try {
        const response = await getResponse(url, method, payload, needsAuth)

        if (response.ok || response.status === 200 || response.status === 201) {
            if (response.status === 204) {
                callback();
                return;
            }
            const responseText = await response.text();
            if (responseText && responseText !== 'Logout successful') {
                const data = JSON.parse(responseText);
                if (data.error) {
                    throw Error(data.error);
                } else {
                    callback(data);
                }
            } else {
                callback(null);
            }
        } else {
            if(response.status === 401) {
                navigation.replace('OnboardingStack', {screen: 'Anmelden'});
            }
            throw Error(response.status)
        }
    } catch (error) {
        console.error(`Fehler beim Abrufen der Daten (${method} ${url}):`, error.message);
        window.alert('Fehler beim Abrufen der Daten');
        callback([]);
    }
}

export const fetchImage = async (url, method = 'GET', payload = null, callback = () => { }, needsAuth = true) => {
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

export const fetchURLUploadImage = (plantId, payload) => {
    return getAuthToken()
        .then((authToken) => {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                },
                body: createFormData(payload),
            };
            return fetch(`${API_URL}/images?plantId=${plantId}`, requestOptions)
        })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw Error(response.status);
            }
        })
        .then((data) => {
            if (data.error) {
                throw Error(data);
            }
            return data
        })
        .catch((err => {
            console.error('Fehler beim Abrufen der Daten:', err);
            window.alert('Fehler beim Abrufen der Daten');
        }))
}

const createFormData = (imageData) => {
    const data = new FormData();
    const uri = imageData.uri;
    const uriParts = uri.split('.');
    const fileType = uriParts[uriParts.length - 1];

    data.append('file', {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
    });

    return data;
};
