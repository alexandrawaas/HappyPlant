import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPlantsScreen from '../../plant/MyPlantsScreen'
import EditPlantScreen from '../../plant/EditPlantScreen'
import SinglePlantScreen from '../../plant/SinglePlantScreen'
import GlobalLayout from '../GlobalLayout';
import headerStyleOptions from '../HeaderStyle';
import NewPlantScreen from "../../plant/NewPlantScreen";
import UploadImageDialog from '../../plant/UploadImageDialog';

const PlantStack = createNativeStackNavigator();

export default function PlantStackNavigator() {
    return (
      <PlantStack.Navigator screenOptions={headerStyleOptions}>
        <PlantStack.Screen name="Meine Pflanzen" children={(props) => <GlobalLayout component={MyPlantsScreen} {...props} />} />
        <PlantStack.Screen name="Pflanzenprofil" children={(props) => <GlobalLayout component={SinglePlantScreen} {...props} />} />
        <PlantStack.Screen name="Pflanze bearbeiten" children={(props) => <GlobalLayout component={EditPlantScreen} {...props} />} />
        <PlantStack.Screen name="Neue Pflanze erstellen" children={(props) => <GlobalLayout component={NewPlantScreen} {...props} />} />
        <PlantStack.Screen name="Foto hochladen" children={(props) => <GlobalLayout component={UploadImageDialog} {...props} />} />
        </PlantStack.Navigator>
  );
}
