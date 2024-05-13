import { View, Text, StyleSheet, Button } from "react-native";
import { roomMock } from "./RoomMock";
import { RoomTypeIcons } from "../../utils/EnumIcons";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";
import AddRoomButton from "./AddRoomButton";
import { LinearGradient } from 'expo-linear-gradient';

export default function RoomsScreen({ navigation }) {
    const handleAddRoomClick = () => {
        console.log("TODO: implement add room dialog")
    }

    return (
        <View style={styles.container}>
            <View style={styles.roomContainer}>
                {roomMock.map(r =>
                    <View style={styles.roomItemContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={[styles.roomItemCard, styles.shadowed]}>
                            <View style={styles.roomItemTopContainer}>
                                <View style={styles.iconContainer}>
                                    {RoomTypeIcons[r.category]}
                                </View>
                                {r.warnings + r.assignments !== 0
                                    ? <View style={styles.hintContainer}>
                                        {r.warnings !== 0
                                            ? <Text style={styles.hint}>
                                                <Entypo name="warning" color="red" size={14} style={styles.icon} />
                                                &nbsp;{r.warnings}
                                            </Text>
                                            : null}
                                        {r.assignments !== 0
                                            ? <Text style={styles.hint}>
                                                <MaterialCommunityIcons name="checkbox-marked" color="lightblue" size={14} style={styles.icon} />
                                                &nbsp;{r.assignments}
                                            </Text>
                                            : null}
                                    </View>
                                    : null}
                            </View>
                            <View style={styles.roomItemBottomContainer}>
                                <Text style={styles.header}>{r.name}</Text>
                                <Text style={styles.subHeader}>{r.plants} {r.plants == 1 ? "Pflanze" : "Pflanzen"}</Text>
                            </View>
                        </LinearGradient>
                    </View>
                )}
                {roomMock.length % 2 == 1
                    ? <AddRoomButton onClick={handleAddRoomClick} displayAsCard />
                : null}
            </View>
            {roomMock.length % 2 == 0
                ? <AddRoomButton onClick={handleAddRoomClick} displayOnNewLine />
            : null}
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
    container: {
        paddingTop: 15,
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "column",
    },
    roomContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
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


{/* <Text style={styles.text}>Meine Räume</Text>
            <Button title="Aufgaben" onPress={()=> navigation.navigate("Aufgaben")} />
            <Button title="Meine Pflanzen" onPress={()=> navigation.navigate("Meine Pflanzen")} />
            <Button title="Lexikon" onPress={()=> navigation.navigate("Lexikon")} />
            <Button title="Einstellungen" onPress={()=> navigation.navigate("Einstellungen")} />
            <Button title="Einzelner Raum" onPress={()=> navigation.navigate("Einzelner Raum")} />
            <Button title="Pflanze erstellen" onPress={()=> navigation.navigate("Pflanze erstellen")} />
            <Button title="Fenster platzieren" onPress={()=> navigation.navigate("Fenster platzieren")} /> */}