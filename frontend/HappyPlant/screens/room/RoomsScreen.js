import { View, StyleSheet, ScrollView, Text } from "react-native";
import AddRoomButton from "./AddRoomButton";
import RoomListItem from "./RoomListItem";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import { useEffect, useState } from "react";
import  fetchURL  from '../../utils/ApiService'

export default function RoomsScreen({ navigation }) {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchURL('/rooms', 'GET', setRooms)
    }, [])

    const handleAddRoomClick = () => {
        console.log("TODO: implement add room dialog")
    }

    return (<>
        {rooms !== undefined
            ? <ScrollView style={styles.container}>
                <View style={styles.roomContainer}>
                    {rooms?.map(r =>
                        <RoomListItem key={r.id} room={r} onPress={(id) => navigation.navigate("Einzelner Raum", { id: id })} />
                    )}
                    {rooms?.length % 2 == 1
                        ? <AddRoomButton onClick={handleAddRoomClick} displayAsCard />
                        : null}
                </View>
                {rooms?.length % 2 == 0
                    ? <AddRoomButton onClick={handleAddRoomClick} displayOnNewLine />
                    : null}
                <VerticalPlaceholder size={110} />
            </ScrollView>
            : <Text></Text>
        }
    </>);
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