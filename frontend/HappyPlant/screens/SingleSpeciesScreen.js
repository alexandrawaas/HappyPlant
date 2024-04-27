import {View, Text, StyleSheet, Button} from "react-native";

export default function SingleSpeciesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Einzelne Pflanzenart</Text>
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