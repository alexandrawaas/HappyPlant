import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderBackground from './screens/global/HeaderBackground';

//Screens
import LoginScreen from "./screens/authentication/LoginScreen";
import AssignmentsScreen from "./screens/AssignmentsScreen";
import RoomsScreen from "./screens/room/RoomsScreen";
import MyPlantsScreen from "./screens/MyPlantsScreen";
import SpeciesScreen from "./screens/species/SpeciesScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SingleRoomScreen from "./screens/room/SingleRoomScreen";
import CreatePlantScreen from "./screens/CreatePlantScreen";
import PlaceWindow from "./screens/PlaceWindow";
import SinglePlantScreen from "./screens/SinglePlantScreen";
import SingleSpeciesScreen from "./screens/species/SingleSpeciesScreen";
import ResetPasswordScreen from "./screens/authentication/ResetPasswordScreen";
import UpdatePasswordScreen from "./screens/authentication/UpdatePasswordScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import LogoutScreen from "./screens/authentication/LogoutScreen";
import TestScreen from "./screens/TestScreen";
import LoadingScreen from "./screens/authentication/LoadingScreen";
import GlobalLayout from './GlobalLayout';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Räume" screenOptions={headerOptions}>
              <Stack.Screen name="Loading" children={(props) => <GlobalLayout component={LoadingScreen} {...props} /> }/>
              <Stack.Screen name="Anmelden" children={(props) => <GlobalLayout component={LoginScreen} {...props} /> }/>
              <Stack.Screen name="Registrieren" children={(props) => <GlobalLayout component={RegisterScreen} {...props} /> }/>
              <Stack.Screen name="Passwort zurücksetzen" children={(props) => <GlobalLayout component={ResetPasswordScreen} {...props} /> }/>
              <Stack.Screen name="Passwort ändern" children={(props) => <GlobalLayout component={UpdatePasswordScreen} {...props} /> }/>
              <Stack.Screen name="Abmelden" children={(props) => <GlobalLayout component={LogoutScreen} {...props} /> }/>
              <Stack.Screen name="Test" children={(props) => <GlobalLayout component={TestScreen} {...props} /> }/>
              <Stack.Screen name="Aufgaben" children={(props) => <GlobalLayout component={AssignmentsScreen} {...props} /> }/>
              <Stack.Screen name="Räume" children={(props) => <GlobalLayout component={RoomsScreen} {...props} /> }/>
              <Stack.Screen name="Meine Pflanzen" children={(props) => <GlobalLayout component={MyPlantsScreen} {...props} /> }/>
              <Stack.Screen name="Lexikon" children={(props) => <GlobalLayout component={SpeciesScreen} {...props} />} />
              <Stack.Screen name="Einstellungen" children={(props) => <GlobalLayout component={SettingsScreen} {...props} /> }/>
              <Stack.Screen name="Einzelner Raum" children={(props) => <GlobalLayout component={SingleRoomScreen} {...props} /> }/>
              <Stack.Screen name="Pflanze erstellen" children={(props) => <GlobalLayout component={CreatePlantScreen} {...props} /> }/>
              <Stack.Screen name="Fenster platzieren" children={(props) => <GlobalLayout component={PlaceWindow} {...props} /> }/>
              <Stack.Screen name="Pflanzenprofil" children={(props) => <GlobalLayout component={SinglePlantScreen} {...props} /> }/>
              <Stack.Screen name="Einzelne Pflanzenart" children={(props) => <GlobalLayout component={SingleSpeciesScreen} {...props} /> }/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const headerOptions = {
    headerTintColor: '#233d0c',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackground: () => (
        <HeaderBackground />
    ),
}
