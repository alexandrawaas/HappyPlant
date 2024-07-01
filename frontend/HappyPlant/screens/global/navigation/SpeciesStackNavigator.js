import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SpeciesScreen from '../../species/SpeciesScreen'
import SingleSpeciesScreen from '../../species/SingleSpeciesScreen'
import GlobalLayout from '../GlobalLayout';
import headerStyleOptions from '../HeaderStyle';

const SpeciesStack = createNativeStackNavigator();

export default function SpeciesStackNavigator() {
    return (
        <SpeciesStack.Navigator screenOptions={headerStyleOptions}>
        <SpeciesStack.Screen name="Lexikon" children={(props) => <GlobalLayout component={SpeciesScreen} {...props} />} />
        <SpeciesStack.Screen name="Einzelne Pflanzenart" children={(props) => <GlobalLayout component={SingleSpeciesScreen} {...props} />} />
    </SpeciesStack.Navigator>
  );
}
