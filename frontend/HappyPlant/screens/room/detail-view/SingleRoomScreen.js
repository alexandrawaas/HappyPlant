import { StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import SingleRoomWarnings from "./SingleRoomWarnings";
import { useCallback, useEffect, useState } from "react";
import VerticalPlaceholder from "../../../utils/styles/VerticalPlaceholder";
import { fetchURL } from '../../../utils/ApiService'
import RoomDragAndDrop from "./RoomDragAndDrop";
import DeleteRoom from "./DeleteRoom";

export default function SingleRoomScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params;
    const [room, setRoom] = useState({});
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        fetchURL(`/rooms/${id}`, 'GET', null, navigation, setRoom)
    }, [])

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: room.name
        })
    }, [navigation, room])

    const handleAddPlantToInventoryPress = () => {
        navigation.navigate('Neue Pflanze erstellen', {id: null})
    }

    const handleRoomUpdate = useCallback((item) => {
        setRoom(item)
    }, [setRoom])



    return (
        <ScrollView style={styles.container} scrollEnabled={!isDragging}>
            <RoomDragAndDrop 
                room={room} 
                onRoomUpdate={handleRoomUpdate} 
                onInventoryAdd={handleAddPlantToInventoryPress} 
                onDrag={setIsDragging}
                navigation={navigation}
                clickable={!isDragging}
            />
            <SingleRoomWarnings room={room} navigation={navigation}/>
            <DeleteRoom room={room} navigation={navigation}/>
            <VerticalPlaceholder size={120}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
