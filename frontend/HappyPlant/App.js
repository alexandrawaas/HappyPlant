import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";

import MyOnboarding from "./screens/OnboardingScreen";
import LoadingScreen from "./screens/authentication/LoadingScreen";
import LoginScreen from "./screens/authentication/LoginScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import TabNavigator from "./screens/global/TabNavigator";

const RootStack = createNativeStackNavigator();

// TODO: on reload dont start in onboarding again 
export default function App() {
  return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="OnboardingStack" component={OnboardingStack} />
          <RootStack.Screen name="MainApp" component={TabNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
}

const OnboardingStack = () => {
  const OnboardingStack = createNativeStackNavigator();

  return (
    <OnboardingStack.Navigator initialRouteName="Onboarding">
      <OnboardingStack.Screen  options={{headerShown: false}}  name="Onboarding" component={MyOnboarding} />
      <OnboardingStack.Screen name="Loading" component={LoadingScreen} />
      <OnboardingStack.Screen name="Anmelden" component={LoginScreen} />
      <OnboardingStack.Screen name="Registrieren" component={RegisterScreen} />
    </OnboardingStack.Navigator>
  );
};