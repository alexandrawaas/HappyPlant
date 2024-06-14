import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import headerStyleOptions from './screens/global/HeaderStyle';

import MyOnboarding from "./screens/OnboardingScreen";
import LoadingScreen from "./screens/authentication/LoadingScreen";
import LoginScreen from "./screens/authentication/LoginScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import TabNavigator from "./screens/global/TabNavigator";
import ResetPasswordScreen from "./screens/authentication/ResetPasswordScreen";

const RootStack = createNativeStackNavigator();
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
      <OnboardingStack.Screen name="Onboarding" component={MyOnboarding} options={{headerTransparent: true, headerTitle:''}}/>
      <OnboardingStack.Screen name="Loading" component={LoadingScreen} />
      <OnboardingStack.Screen name="Anmelden" component={LoginScreen} options={{headerTransparent: true, headerTitle:''}}/>
      <OnboardingStack.Screen name="Passwort zurücksetzen" component={ResetPasswordScreen} options={headerStyleOptions}/>
      <OnboardingStack.Screen name="Registrieren" component={RegisterScreen} options={{headerTransparent: true, headerTitle:''}}/>
    </OnboardingStack.Navigator>
  );
};
