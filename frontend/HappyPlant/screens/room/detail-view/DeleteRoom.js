import { useCallback } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { fetchURL } from "../../../utils/ApiService";

export default DeleteRoom = ({room, navigation}) => {
    const createTwoButtonAlert = useCallback(() =>
        Alert.alert('Raum löschen', `Bist du sicher, dass du den Raum "${room.name}" löschen möchtest? Alle hier platzierten Pflanzen landen danach im Inventar.`, [
            {
                text: 'Abbrechen',
                style: 'cancel',
            },
            {
                text: 'Löschen', onPress: () => {
                    fetchURL(`/rooms/${room.id}`, 'DELETE', null, navigation, () => {
                        navigation.replace("Räume", {reload: 1})
                    });
                }
            },
        ]), [room])

    return (
        <View style={styles.container}>
            <Text onPress={() => createTwoButtonAlert()} color="red" style={[styles.link, styles.redLink]}>Raum löschen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        color: "grey",
        fontSize: 16,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "grey"
    },
    redLink: {
        color: "red",
        marginTop: 20,
        textDecorationColor: "red",
    },
    container: {
        alignItems: 'center'
    },
})