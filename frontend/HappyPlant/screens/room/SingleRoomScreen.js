import {View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import SingleRoomGrid from "./SingleRoomGrid";
import SingleRoomInventory from "./SingleRoomInventory";
import SingleRoomWarnings from "./SingleRoomWarnings";
import { useEffect, useState } from "react";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import { fetchURL } from '../../utils/ApiService'

export default function SingleRoomScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params;
    const [room, setRoom] = useState({});

    useEffect(() => {
        fetchURL(`/rooms/${id}`, 'GET', null, setRoom)
    }, [])

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: room.name
        })
    }, [navigation, room])

    return (
        <ScrollView style={styles.container}>
            <SingleRoomGrid room={room} navigation={navigation}/>
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