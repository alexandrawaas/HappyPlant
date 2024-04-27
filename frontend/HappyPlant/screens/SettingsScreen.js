import {View, Text, StyleSheet, Button} from "react-native";

export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Einstellungen</Text>
            <Button title="Aufgaben" onPress={()=> navigation.navigate("Aufgaben")} />
            <Button title="Räume" onPress={()=> navigation.navigate("Räume")} />
            <Button title="Meine Pflanzen" onPress={()=> navigation.navigate("Meine Pflanzen")} />
            <Button title="Lexikon" onPress={()=> navigation.navigate("Lexikon")} />
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