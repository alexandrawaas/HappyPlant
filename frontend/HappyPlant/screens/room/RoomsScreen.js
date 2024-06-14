import { View, StyleSheet, ScrollView, Text } from "react-native";
import AddRoomButton from "./AddRoomButton";
import RoomListItem from "./RoomListItem";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import { fetchURL } from '../../utils/ApiService'
import { commonStyles } from "../../utils/styles/CommonStyles";

export default function RoomsScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchURL('/rooms', 'GET', null, setRooms)
    }, [])

    useEffect(() => {
        fetchURL(`/rooms?search=${searchQuery}`, 'GET', null, setRooms)
    }, [searchQuery])

    const handleAddRoomClick = () => {
        console.log("TODO: implement add room dialog")
    }

    return (
        <View style={styles.container}>
            <View style={styles.toolContainer}>
                <View style={[styles.searchContainer, commonStyles.shadow]}>
                    <Searchbar style={styles.searchBar}
                        placeholder="Suche nach einem Raum..." onChangeText={setSearchQuery} value={searchQuery}
                    />
                </View>
            </View>
            <ScrollView>
                <View style={styles.roomContainer}>
                    { rooms.map(r =>
                        <RoomListItem 
                            key={r.id} room={r} 
                            onPress={() => navigation.navigate("Einzelner Raum", {id: r.id})} 
                        />   
                    )}
                    { rooms.length % 2 == 1
                        ? <AddRoomButton onClick={handleAddRoomClick} displayAsCard />
                        : null
                    }
                </View>
                { rooms.length % 2 == 0
                    ? <AddRoomButton onClick={handleAddRoomClick} displayOnNewLine />
                    : null
                }
                <VerticalPlaceholder size={110}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    toolContainer: {
        marginBottom: 20,
    },  
    searchContainer: {
        backgroundColor: "red",
        borderRadius: 10,
    },
    searchBar: {
        background: "linear-gradient(180deg, #FFFFFF 0%, #00000 100%)",
        backgroundColor: "#fef7ee",
        borderRadius: 10,
    },
    roomContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});