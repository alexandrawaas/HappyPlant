import { View, Text, StyleSheet} from "react-native";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from "./screens/global/TabNavigator";
import LoadingScreen from "./screens/authentication/LoadingScreen";
import LoginScreen from "./screens/authentication/LoginScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import ResetPasswordScreen from "./screens/authentication/ResetPasswordScreen";
import SingleRoomScreen from "./screens/room/SingleRoomScreen";
import CreatePlantScreen from "./screens/CreatePlantScreen";
import PlaceWindow from "./screens/PlaceWindow";
import SinglePlantScreen from "./screens/SinglePlantScreen";
import SingleSpeciesScreen from "./screens/species/SingleSpeciesScreen";
import LogoutScreen from "./screens/authentication/LogoutScreen";
import TestScreen from "./screens/TestScreen";
//Utils
import { useNotification } from "./utils/useNotification";
//Utils
import { useNotification } from "./utils/useNotification";
import LoadingScreen from "./screens/authentication/LoadingScreen";
import UpdatePasswordScreen from "./screens/authentication/UpdatePasswordScreen";

const Stack = createNativeStackNavigator();
export default function App() {

  const{notification} = useNotification();

  return (
      <NavigationContainer>
          <TabNavigator />
          <Stack.Screen name="Loading" component={LoadingScreen}/>
          <Stack.Screen name="Anmelden" component={LoginScreen}/>
          <Stack.Screen name="Registrieren" component={RegisterScreen}/>
          <Stack.Screen name="Passwort zurücksetzen" component={ResetPasswordScreen}/>
          <Stack.Screen name="Passwort ändern" component={UpdatePasswordScreen}/>
          <Stack.Screen name="Abmelden" component={LogoutScreen}/>
          <Stack.Screen name="Test" component={TestScreen}/>
          <Stack.Screen name="Einzelner Raum" component={SingleRoomScreen}/>
          <Stack.Screen name="Pflanze erstellen" component={CreatePlantScreen}/>
          <Stack.Screen name="Fenster platzieren" component={PlaceWindow}/>
          <Stack.Screen name="Pflanzenprofil" component={SinglePlantScreen}/>
          <Stack.Screen name="Einzelne Pflanzenart" component={SingleSpeciesScreen}/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});