import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput, Alert} from "react-native";
import {useEffect, useState} from "react";
import {Input, Tooltip} from "react-native-elements";
import {API_URL} from "../../config";
import {useRoute} from "@react-navigation/native";

export default function NewPlantScreen({ navigation }) {

    const [species, setSpecies] = useState([]);
    const [name, setName] = useState("");

    let route = useRoute();
    const { id } = route.params;

    useEffect(() => {
        fetch(`${API_URL}/species`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
    }, [species])


    return (
        <View style={styles.container}>
            <Input style={styles.searchBar} inputMode={"text"} placeholder="Name deiner Pflanze" onChangeText={setName} value={name}/>
            <Text>{species !== [] || species !== undefined ?
                ( id != null ? (
                    species.filter(s => s.id === id).length > 0 ? species.filter(s => s.id === id)[0].name : "SpeciesName"
                ) : (species.at(0) !== undefined ? species.at(0).name : "SpeciesName"))
                : "SpeciesName"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        padding: 10,
    },
    roomIcon: {
        marginRight: 25,
    },
    roomContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"top",
    },
    containerHorizontal: {
        marginTop: 16,
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start",
        justifyContent: "space-between",
        width: '100%'
    },
    text: {
        fontSize: 16,
    },
    boldText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    sectionTitle: {
        alignSelf: "flex-start",
        fontSize: 18,
        color: "grey",
        marginBottom: 10,
    },
    link: {
        color: "grey",
        fontSize: 16,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "grey"
    },
    boxContainer: {
        width: "100%",
        backgroundColor: '#fdfbef',
        borderRadius: 15,
        marginBottom: 10,
    },
    detailContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-between",
    },
    badgesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    infoBadge: {
        borderRadius: 50,
        borderColor: "grey",
        borderWidth: 1.5,
        width: 20,
        height: 20,
        alignItems: "center",
        marginHorizontal: 3,
    },
    infoBadgeText: {
        color: "grey",
        fontWeight: "bold",
    },
    lightingBadge: {
        borderRadius: 8,
        borderColor: "lightgrey",
        borderWidth: 1,
        width: 24,
        height: 24,
        alignItems: "center",
        marginHorizontal: 8,
        elevation: 1,
        backgroundColor: "#fdfbef",
    },
    numberInput: {
        width: 40,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "bottom",
        paddingBottom: 5,
        paddingTop: 5,
    },
    numberInputContainer: {
        width: 200,
        maxWidth: 300,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    numberInputInnerContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "bottom",
        justifyContent: "center",
        width: 60,
        height: 30,
        backgroundColor: "#f5eae7",
        borderRadius: 10,
        marginHorizontal: 10,
    },
    notesText: {
        fontSize: 16,
        textAlignVertical: "bottom",
        paddingTop: 15,
    },
    notesContainer: {
        paddingTop: 10,
        paddingBottom: 2,
    }
});