import {useState, useEffect, useRef} from "react";
import * as Notifications from 'expo-notifications';
import { AsyncStorage } from 'react-native';


export const useNotification = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => {
            const notificationSettings = await AsyncStorage.getItem('notificationSettings');
            const settings = notificationSettings ? JSON.parse(notificationSettings) : {};
            return {
                shouldShowAlert: settings.shouldShowAlert === 'true',
                // TODO: Vibrations
                shouldPlaySound: settings.shouldPlaySound === 'true',
                shouldSetBadge: settings.shouldSetBadge === 'true',
            };
        }
    })

    const [notification, setNotification] = useState();

    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(
        () => {
            responseListener.current =
            Notifications.addNotificationResponseReceivedListener((response) => {
              //TODO navigate to activeAssignments page -> fires when user taps on notification
              console.log(response);
            });

            notificationListener.current = Notifications.addNotificationReceivedListener(
                (notification) => { setNotification(notification) }
            );

            return () => {
                Notifications.removeNotificationSubscription(notificationListener.current);
                Notifications.removeNotificationSubscription(responseListener.current);
            }

        }    
    ,[]);

    return{notification}

}