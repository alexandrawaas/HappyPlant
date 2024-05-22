import {useState, useEffect, useRef} from "react";
import * as Notifications from 'expo-notifications';



export const useNotification = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        })
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