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
import LoadingScreen from "./screens/authentication/LoadingScreen";
import TabNavigator from "./screens/navigation/TabNavigator";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <TabNavigator />
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