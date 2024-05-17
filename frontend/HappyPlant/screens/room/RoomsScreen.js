import { View, StyleSheet, ScrollView } from "react-native";
import { roomMock } from "./RoomMock";
import AddRoomButton from "./AddRoomButton";
import RoomListItem from "./RoomListItem";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";

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
            <VerticalPlaceholder size={110}/>
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
    },
});