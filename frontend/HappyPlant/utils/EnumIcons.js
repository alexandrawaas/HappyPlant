
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

export const RoomTypeIcons = {
    "BATHROOM": <FontAwesome5 name="bath" color="#000000" size={50}/>, 
    "BEDROOM": <Ionicons name="bed" color="#000000" size={50}/>, 
    "KITCHEN": <FontAwesome6 name="kitchen-set" color="#000000" size={50}/>, 
    "LIVING_ROOM": <FontAwesome6 name="couch" color="#000000" size={50}/>, 
    "OFFICE": <FontAwesome6 name="computer" color="#000000" size={50}/>, 
    "HALLWAY": <Ionicons name="footsteps" color="#000000" size={50}/>, 
    "BALCONY": <MaterialIcons name="balcony" color="#000000" size={50}/>, 
    "GREENHOUSE": <MaterialCommunityIcons name="greenhouse" color="#000000" size={50}/>, 
    "OTHER": <MaterialIcons name="other-houses" color="#000000" size={50}/>, 
}

