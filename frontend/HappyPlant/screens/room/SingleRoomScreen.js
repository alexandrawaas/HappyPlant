import {View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function SingleRoomScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Einzelner Raum</Text>
            <Text>id: {id}</Text>
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