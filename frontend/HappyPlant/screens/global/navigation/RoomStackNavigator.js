import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoomsScreen from '../../room/RoomsScreen';
import SingleRoomScreen from '../../room/detail-view/SingleRoomScreen';
import PlaceWindow from '../../room/creation/PlaceWindow';
import GlobalLayout from '../GlobalLayout';
import headerStyleOptions from '../HeaderStyle';
import RoomCreationScreen from '../../room/creation/RoomCreationScreen';

const RoomStack = createNativeStackNavigator();

export default function RoomStackNavigator() {
    return (
        <RoomStack.Navigator screenOptions={headerStyleOptions}>
            <RoomStack.Screen name="Räume" children={(props) => <GlobalLayout component={RoomsScreen} {...props} />} />
            <RoomStack.Screen name="Einzelner Raum" children={(props) => <GlobalLayout component={SingleRoomScreen} {...props} />} />
            <RoomStack.Screen name="Fenster platzieren" children={(props) => <GlobalLayout component={PlaceWindow} {...props} />} />
            <RoomStack.Screen name="Neuen Raum erstellen" children={(props) => <GlobalLayout component={RoomCreationScreen} {...props} />} />
        </RoomStack.Navigator>
    );
}
