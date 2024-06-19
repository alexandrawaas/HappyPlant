import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import headerStyleOptions from './screens/global/HeaderStyle';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import MyOnboarding from "./screens/OnboardingScreen";
import LoadingScreen from "./screens/authentication/LoadingScreen";
import LoginScreen from "./screens/authentication/LoginScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import TabNavigator from "./screens/global/navigation/TabNavigator";
import ResetPasswordScreen from "./screens/authentication/ResetPasswordScreen";
import RegisterSuccess from './screens/authentication/RegisterSuccess';

const RootStack = createNativeStackNavigator();
export default function App() {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="OnboardingStack" component={OnboardingStack} />
          <RootStack.Screen name="MainApp" component={TabNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
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
      <OnboardingStack.Screen name="RegisterSuccess" component={RegisterSuccess} options={{headerTransparent: true, headerTitle:''}}/>
    </OnboardingStack.Navigator>
  );
};
