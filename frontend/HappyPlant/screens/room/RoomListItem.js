import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RoomTypeIcons } from "../../utils/EnumIcons";
import { LinearGradient } from 'expo-linear-gradient';
import RoomListItemWarnings from "./RoomListItemWarnings";

export default function RoomListItem({room, onPress}) {
    return (
        <View style={styles.roomItemContainer}>
            <LinearGradient colors={['#fdfbef', '#fef1ed']} style={[styles.roomItemCard, styles.shadowed]}>
                <TouchableOpacity onPress={() => onPress(room.id)}>
                    <View style={styles.roomItemTopContainer}>
                        <View style={styles.iconContainer}>
                            {RoomTypeIcons[room.category]}
                        </View>
                        {room.numberOfWarnings + room.numberOfAssignments !== 0
                            ? <RoomListItemWarnings numberOfWarnings={room.numberOfWarnings} numberOfAssignments={room.numberOfAssignments} />
                            : null}
                    </View>
                    <View style={styles.roomItemBottomContainer}>
                        <Text style={styles.header} numberOfLines={1}>{room.name}</Text>
                        <Text style={styles.subHeader}>{room.numberOfPlants} {room.numberOfPlants == 1 ? "Pflanze" : "Pflanzen"}</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}


const styles = StyleSheet.create({
    shadowed: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    roomItemContainer: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
        height: 150,
        padding: 10,
    },
    roomItemCard: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fef7ee",
        borderRadius: 10,
        padding: 15,  
    },
    roomItemTopContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 13,
        alignItems: "center",
        justifyContent: "space-around"
    },
    iconContainer: {
        width: "50%",
        display: "flex",
        alignItems: "center"
    },
    roomItemBottomContainer: {
        alignItems: "center",
    },
    header: {
        fontSize: 15,
        color: "#233d0c"
    },
    subHeader: {
        fontSize: 12,
        color: "#233d0c"
    }
});
