import { View, Text, StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RoomListItemWarnings({ room }) {
    return (
        <View style={styles.hintContainer}>
            {room.warnings !== 0
                ? <Text style={styles.hint}>
                    <Entypo name="warning" color="red" size={14} />
                    &nbsp;{room.warnings}
                </Text>
                : null}
            {room.assignments !== 0
                ? <Text style={styles.hint}>
                    <MaterialCommunityIcons name="checkbox-marked" color="lightblue" size={14} />
                    &nbsp;{room.assignments}
                </Text>
                : null}
        </View>
    );
}

const styles = StyleSheet.create({
    hintContainer: {
        display: "flex",
    },
    hint: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#233d0c"
    },
});
