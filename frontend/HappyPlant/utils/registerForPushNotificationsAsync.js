import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";
import {Platform} from 'react-native';

export const registerForPushNotificationsAsync = async() => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        return;
      }

      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }

      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas?.projectId,
      });
      
      return token;

    } else {
        console.error("ERROR: No physical device used")
    }
  }