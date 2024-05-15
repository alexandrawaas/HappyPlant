import { View, StyleSheet, ScrollView } from "react-native";
import { roomMock } from "./RoomMock";
import AddRoomButton from "./AddRoomButton";
import RoomListItem from "./RoomListItem";

export default function RoomsScreen({ navigation }) {
    const handleAddRoomClick = () => {
        console.log("TODO: implement add room dialog")
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.roomContainer}>
                {roomMock.map(r =>
                    <RoomListItem key={r.id} room={r} onPress={(id) => navigation.navigate("Einzelner Raum", {id: id})} />
                )}
                {roomMock.length % 2 == 1
                    ? <AddRoomButton onClick={handleAddRoomClick} displayAsCard />
                : null}
            </View>
            {roomMock.length % 2 == 0
                ? <AddRoomButton onClick={handleAddRoomClick} displayOnNewLine />
            : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    roomContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
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