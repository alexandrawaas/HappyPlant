import { View, Text, StyleSheet, Button} from "react-native";

export default function AssignmentsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Aufgaben</Text>
            <Button title="Räume" onPress={()=> navigation.navigate("Räume")} />
            <Button title="Meine Pflanzen" onPress={()=> navigation.navigate("Meine Pflanzen")} />
            <Button title="Lexikon" onPress={()=> navigation.navigate("Lexikon")} />
            <Button title="Einstellungen" onPress={()=> navigation.navigate("Einstellungen")} />
            <Button title="Test" onPress={()=> navigation.navigate("Test")} />
            <Button title="Abmelden" onPress={()=> navigation.navigate("Logout")} />
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