import {View, Text, StyleSheet, Button} from "react-native";
import {useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {plantMock} from "./plant/PlantMock";

export default function SinglePlantScreen({ navigation }) {

    const route = useRoute();
    const { id } = route.params ?? {id: "77ce460c-9dc3-463a-89a9-3b2a3803752e"};
    const [plant, setPlant] = useState(plantMock.find(plant => plant.id === id));

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: plant.name
        })
    }, [navigation, plant])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pflanzenprofil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    text: {
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});