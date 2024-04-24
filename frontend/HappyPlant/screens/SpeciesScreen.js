import {View, Text, StyleSheet, Button} from "react-native";

export default function SpeciesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lexikon</Text>
            <Button title="Aufgaben" onPress={()=> navigation.navigate("Aufgaben")} />
            <Button title="Räume" onPress={()=> navigation.navigate("Räume")} />
            <Button title="Meine Pflanzen" onPress={()=> navigation.navigate("Meine Pflanzen")} />
            <Button title="Einstellungen" onPress={()=> navigation.navigate("Einstellungen")} />
            <Button title="Einzelne Pflanzenart" onPress={()=> navigation.navigate("Einzelne Pflanzenart")} />
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