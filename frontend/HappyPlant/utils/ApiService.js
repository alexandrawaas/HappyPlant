import { API_URL } from "../config";

// TODO: dynamically retrieve auth token
const token = `
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleGFtcGxlLnVzZXJAdGVzdC5jb20iLCJleHAiOjE3MTYwMTgyNjIsInVzZXJJZCI6IjI3OWU3MmJiLWZkOWEtNDNlNy05ODcxLTFjZWU3ODdhMGRjOCIsImlhdCI6MTcxNjAxNTY3MH0.xD2Ytcg5SXtKKmi7K6N2l8sef1kqbxvA5hts3RPH8b9WN5gDLv56SBumB58Gk6yFbATIYVJAN27Rcrz5dKDvMg
`.trim();
const authHeader = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
});

const fetchURL = (url, method='GET', callback) => {
    fetch(`${API_URL}${url}`, {
        headers: authHeader,
        method: method
    })
    .catch(err => window.alert(err))
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.log('error: ', data)
            window.alert(data.error)
            callback([])
        } else {
            callback(data)
        }
    })
}

export default fetchURL;