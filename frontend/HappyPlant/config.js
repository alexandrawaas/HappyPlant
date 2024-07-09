import {Platform} from "react-native";

export const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:8080' : 'http://localhost:8080';
//export const API_URL = 'http://192.168.188.68:8080';