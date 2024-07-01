import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GlobalLayout from '../GlobalLayout';
import headerStyleOptions from '../HeaderStyle';
import SettingsScreen from '../../settings/SettingsScreen';
import PrivacyScreen from '../../settings/PrivacyScreen';
import ImprintScreen from '../../settings/ImprintScreen';
import ResetPasswordScreen from '../../authentication/ResetPasswordScreen';

const SettingStack = createNativeStackNavigator();

export default function SettingStackNavigator() {
    return (
        <SettingStack.Navigator screenOptions={headerStyleOptions}>
        <SettingStack.Screen name="Einstellungen" children={(props) => <GlobalLayout component={SettingsScreen} {...props} />} />
        <SettingStack.Screen name="Datenschutz" component={PrivacyScreen} />
        <SettingStack.Screen name="Impressum" component={ImprintScreen} />
        {/* <SettingStack.Screen name="Passwort zurücksetzen" component={ResetPasswordScreen} /> */}
    </SettingStack.Navigator>
  );
}
