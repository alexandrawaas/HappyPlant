import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RoomsScreen from '../room/RoomsScreen';
import SingleRoomScreen from '../room/SingleRoomScreen';
import PlaceWindow from '../PlaceWindow';
import GlobalLayout from './GlobalLayout';
import headerStyleOptions from './HeaderStyle';

const RoomStack = createNativeStackNavigator();

export default function RoomStackNavigator() {
    return (
        <RoomStack.Navigator screenOptions={headerStyleOptions}>
            <RoomStack.Screen name="Räume" children={(props) => <GlobalLayout component={RoomsScreen} {...props} />} />
            <RoomStack.Screen name="Einzelner Raum" children={(props) => <GlobalLayout component={SingleRoomScreen} {...props} />} />
            <RoomStack.Screen name="Fenster platzieren" children={(props) => <GlobalLayout component={PlaceWindow} {...props} />} />
        </RoomStack.Navigator>
    );
}
