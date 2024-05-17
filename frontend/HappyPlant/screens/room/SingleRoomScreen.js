import {View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import SingleRoomGrid from "./SingleRoomGrid";
import SingleRoomInventory from "./SingleRoomInventory";
import SingleRoomWarnings from "./SingleRoomWarnings";
import { useEffect, useState } from "react";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import { roomMock } from "./RoomMock";

export default function SingleRoomScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params ?? {id: "32146db7-cead-4128-9332-d25f626086c6"};
    const [room, setRoom] = useState(roomMock.find(r => r.id === id));
    //  ["944d9c5e-29b6-4eb9-9191-453b1742fddc", "32146db7-cead-4128-9332-d25f626086c6", "219624c5-ca96-488e-8174-e07fadf3b726"]

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: room.name
        })
    }, [navigation, room])

    return (
        <ScrollView style={styles.container}>
            <SingleRoomGrid room={room} navigation={navigation}/>
            <Text>{room.name}</Text>
            <SingleRoomInventory room={room}/>
            <SingleRoomWarnings room={room}/>
            <VerticalPlaceholder size={120}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});