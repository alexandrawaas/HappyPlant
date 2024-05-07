import { View, Text, StyleSheet} from "react-native";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import LoginScreen from "./screens/authentication/LoginScreen";
import AssignmentsScreen from "./screens/AssignmentsScreen";
import RoomsScreen from "./screens/RoomsScreen";
import MyPlantsScreen from "./screens/MyPlantsScreen";
import SpeciesScreen from "./screens/SpeciesScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SingleRoomScreen from "./screens/SingleRoomScreen";
import CreatePlantScreen from "./screens/CreatePlantScreen";
import PlaceWindow from "./screens/PlaceWindow";
import SinglePlantScreen from "./screens/SinglePlantScreen";
import SingleSpeciesScreen from "./screens/SingleSpeciesScreen";
import ResetPasswordScreen from "./screens/authentication/ResetPasswordScreen";
import UpdatePasswordScreen from "./screens/authentication/UpdatePasswordScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import LogoutScreen from "./screens/authentication/LogoutScreen";
import TestScreen from "./screens/TestScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Anmelden">
              <Stack.Screen name="Anmelden" component={LoginScreen}/>
              <Stack.Screen name="Registrieren" component={RegisterScreen}/>
              <Stack.Screen name="Passwort zurücksetzen" component={ResetPasswordScreen}/>
              <Stack.Screen name="Passwort ändern" component={UpdatePasswordScreen}/>
              <Stack.Screen name="Abmelden" component={LogoutScreen}/>
              <Stack.Screen name="Test" component={TestScreen}/>
              <Stack.Screen name="Aufgaben" component={AssignmentsScreen}/>
              <Stack.Screen name="Räume" component={RoomsScreen}/>
              <Stack.Screen name="Meine Pflanzen" component={MyPlantsScreen}/>
              <Stack.Screen name="Lexikon" component={SpeciesScreen}/>
              <Stack.Screen name="Einstellungen" component={SettingsScreen}/>
              <Stack.Screen name="Einzelner Raum" component={SingleRoomScreen}/>
              <Stack.Screen name="Pflanze erstellen" component={CreatePlantScreen}/>
              <Stack.Screen name="Fenster platzieren" component={PlaceWindow}/>
              <Stack.Screen name="Pflanzenprofil" component={SinglePlantScreen}/>
              <Stack.Screen name="Einzelne Pflanzenart" component={SingleSpeciesScreen}/>
          </Stack.Navigator>
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