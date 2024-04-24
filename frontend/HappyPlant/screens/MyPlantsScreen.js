import {View, Text, StyleSheet, Button} from "react-native";

export default function MyPlantsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meine Pflanzen</Text>
            <Button title="Aufgaben" onPress={()=> navigation.navigate("Aufgaben")} />
            <Button title="Räume" onPress={()=> navigation.navigate("Räume")} />
            <Button title="Lexikon" onPress={()=> navigation.navigate("Lexikon")} />
            <Button title="Einstellungen" onPress={()=> navigation.navigate("Einstellungen")} />
            <Button title="Einzelne Pflanze" onPress={()=> navigation.navigate("Pflanzenprofil")} />
            <Button title="Pflanze bearbeiten" onPress={()=> navigation.navigate("Pflanze erstellen")} />
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