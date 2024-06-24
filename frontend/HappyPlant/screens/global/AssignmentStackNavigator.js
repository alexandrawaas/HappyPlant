import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AssignmentsScreen from '../AssignmentsScreen'
import GlobalLayout from './GlobalLayout';
import headerStyleOptions from './HeaderStyle';

const AssignmentStack = createNativeStackNavigator();

export default function AssignmentStackNavigator() {
    return (
        <AssignmentStack.Navigator screenOptions={headerStyleOptions}>
            <AssignmentStack.Screen name="Aufgaben" children={(props) => <GlobalLayout component={AssignmentsScreen} {...props} />} />
        </AssignmentStack.Navigator>
    );
}
