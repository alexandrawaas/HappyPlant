import { View, Text, StyleSheet, Pressable, BackHandler } from "react-native";
import WindowSelectionGrid from "./room/WindowSelectionGrid";
import { useEffect, useState, useMemo, useCallback } from "react";
import { fetchURL } from "../utils/ApiService";
import { useRoute } from "@react-navigation/native";
import { HeaderBackButton } from '@react-navigation/elements'

export default function PlaceWindow({ navigation }) {
    const route = useRoute();
    const [room, setRoom] = useState()
    const [pixels, setPixels] = useState(null)

    useEffect(() => {
        navigation.setOptions({
            ...navigation,
            headerLeft: (props) => (
                <HeaderBackButton {...props} onPress={() => backAction(room?.id)} style={styles.headerBackButton} />
            )
        })
    }, [navigation, room])

    useEffect(() => {
        setRoom(route.params.roomData)
    }, [route])

    const backAction = (id, goBack=true) => {
        fetchURL(`/rooms/${id}`, 'DELETE')
        if(goBack)
            navigation.goBack(route.params.go_back_key);
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => backAction(room?.id, false));
        return () => backHandler.remove();
    }, [room]);

    const handleDone = async () => {
        if (pixels != null) {
            const pixelValues = pixels.map(p => p.item);
            console.log(pixelValues);
            fetchURL(`/rooms/${room?.id}/windows`, 'PUT', pixelValues, () => {
                navigation.navigate('Räume');
            });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{room?.name}</Text>
            <Text style={styles.text}>Wählen Sie die Position Ihrer Fenster. Tippen Sie dafür auf die Kästchen am Rand des Raumes.</Text>
            <WindowSelectionGrid room={room} callback={setPixels} />
            <Pressable
                style={styles.button}
                onPress={handleDone}
                title="Raum erstellen"
            >
                <Text style={styles.buttonText}>Raum erstellen</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    text: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 16,
    },
    button: {
        padding: 20,
        marginHorizontal: 20,
        minWidth: 120,
        backgroundColor: '#bef5b5',
        borderRadius: 50,
        borderColor: '#b0e4a7',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    headerBackButton: {
        marginLeft: -3,
    }
});
