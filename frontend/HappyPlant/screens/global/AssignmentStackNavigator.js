import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AssignmentsScreen from '../AssignmentsScreen'
import GlobalLayout from './GlobalLayout';
import headerStyleOptions from './HeaderStyle';
import DragTestScreen from '../other/DragTestScreen'
import DragTest from '../other/DragTest'

const AssignmentStack = createNativeStackNavigator();

export default function AssignmentStackNavigator() {
    return (
        <AssignmentStack.Navigator screenOptions={headerStyleOptions}>
            <AssignmentStack.Screen name="Aufgaben" children={(props) => <GlobalLayout component={DragTest} {...props} />} />
        </AssignmentStack.Navigator>
    );
}
