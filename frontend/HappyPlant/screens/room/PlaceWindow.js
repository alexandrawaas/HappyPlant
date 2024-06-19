import { View, Text, StyleSheet, BackHandler, TouchableOpacity } from "react-native";
import WindowSelectionGrid from "./WindowSelectionGrid";
import { useEffect, useState } from "react";
import { fetchURL } from "../../utils/ApiService";
import { useRoute } from "@react-navigation/native";
import { HeaderBackButton } from '@react-navigation/elements';
import Feather from "react-native-vector-icons/Feather";

export default function PlaceWindow({ navigation }) {
    const route = useRoute();
    const [room, setRoom] = useState()
    const [pixels, setPixels] = useState(null)

    useEffect(() => {
        const handleDone = () => {
            const pixelValues = pixels?.map(p => p.item) ?? [];
            fetchURL(`/rooms/${room?.id}/windows`, 'PUT', pixelValues, () => {
                navigation.navigate('Räume');
            });
        };

        navigation.setOptions({
            ...navigation,
            headerLeft: (props) => (
                <HeaderBackButton {...props} onPress={() => backAction(room?.id)} style={styles.headerBackButton} />
            ),
            headerRight: () => (
                <TouchableOpacity onPress={handleDone} style={{margin: 8}}>
                    <Feather name="check" color="grey" size={25}/>
                </TouchableOpacity>
            )
        })
    }, [navigation, room, pixels])

    useEffect(() => {
        setRoom(route.params.roomData)
    }, [route])

    const backAction = (id, goBack = true) => {
        fetchURL(`/rooms/${id}`, 'DELETE')
        if (goBack)
            navigation.goBack(route.params.go_back_key);
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => backAction(room?.id, false));
        return () => backHandler.remove();
    }, [room]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{room?.name}</Text>
            <Text style={styles.text}>Wählen Sie die Position Ihrer Fenster. Tippen Sie dafür auf die Kästchen am Rand des Raumes.</Text>
            <WindowSelectionGrid room={room} callback={setPixels} />
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
