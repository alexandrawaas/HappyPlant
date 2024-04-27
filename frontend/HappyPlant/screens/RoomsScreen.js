import {View, Text, StyleSheet, Button} from "react-native";


export default function RoomsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Meine Räume</Text>
            <Button title="Aufgaben" onPress={()=> navigation.navigate("Aufgaben")} />
            <Button title="Meine Pflanzen" onPress={()=> navigation.navigate("Meine Pflanzen")} />
            <Button title="Lexikon" onPress={()=> navigation.navigate("Lexikon")} />
            <Button title="Einstellungen" onPress={()=> navigation.navigate("Einstellungen")} />
            <Button title="Einzelner Raum" onPress={()=> navigation.navigate("Einzelner Raum")} />
            <Button title="Pflanze erstellen" onPress={()=> navigation.navigate("Pflanze erstellen")} />
            <Button title="Fenster platzieren" onPress={()=> navigation.navigate("Fenster platzieren")} />
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