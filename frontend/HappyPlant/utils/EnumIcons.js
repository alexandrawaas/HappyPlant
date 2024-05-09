
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    icon: {
        paddingRight: 7,
    }
});

export const AssignmentTypeIcons = {
    "WATERING": <MaterialCommunityIcons name="water" color="#000000" size={20} style={styles.icon}/>,
    "CUTTING": <Entypo name="scissors" color="#000000" size={20} style={styles.icon}/>,
    "FERTILIZING": <MaterialCommunityIcons name="seed" color="#000000" size={20} style={styles.icon}/>,
    "REPOTTING": <MaterialCommunityIcons name="shovel" color="#000000" size={20} style={styles.icon}/>,
    "LIGHTING": <MaterialIcons name="sunny" color="#000000" size={20} style={styles.icon}/>,
}