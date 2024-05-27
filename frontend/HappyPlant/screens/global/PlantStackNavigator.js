import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPlantsScreen from '../plant/MyPlantsScreen'
import CreatePlantScreen from '../CreatePlantScreen'
import SinglePlantScreen from '../plant/SinglePlantScreen'
import GlobalLayout from './GlobalLayout';
import headerStyleOptions from './HeaderStyle';
import RoomsScreen from "../room/RoomsScreen";

const PlantStack = createNativeStackNavigator();

export default function PlantStackNavigator() {
    return (
      <PlantStack.Navigator screenOptions={headerStyleOptions}>
        <PlantStack.Screen name="Meine Pflanzen" children={(props) => <GlobalLayout component={MyPlantsScreen} {...props} />} />
        <PlantStack.Screen name="Pflanzenprofil" children={(props) => <GlobalLayout component={SinglePlantScreen} {...props} />} />
        <PlantStack.Screen name="Pflanze erstellen" children={(props) => <GlobalLayout component={CreatePlantScreen} {...props} />} />
        <PlantStack.Screen name="rooms" children={(props) => <GlobalLayout component={RoomsScreen} {...props} />} />
        </PlantStack.Navigator>
  );
}
