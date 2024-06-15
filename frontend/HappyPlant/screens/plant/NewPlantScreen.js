import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {API_URL} from "../../config";
import {useRoute} from "@react-navigation/native";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import Feather from "react-native-vector-icons/Feather";
import CollapsibleBar from "../other/CollapsibleBar";
import {LinearGradient} from "expo-linear-gradient";

export default function NewPlantScreen({ navigation }) {

    const [species, setSpecies] = useState([]);
    const [name, setName] = useState("");

    let route = useRoute();
    const { id } = route.params;

    const [chosenSpecies, setChosenSpecies] = useState(id);


    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: "Neue Pflanze",
            headerRight: () => (
                <TouchableOpacity onPress={() => console.log("submit Button pressed")} style={{margin: 8}}>
                    <Feather name="check" color="grey" size={25}/>
                </TouchableOpacity>
            )
        })
    });

    useEffect(() => {
        fetch(`${API_URL}/species`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
    }, [species])

    useEffect(() => {
        if(chosenSpecies === undefined || chosenSpecies === null)
        {
            (id !== null ? setChosenSpecies(species.filter(x => x.id === id)) : setChosenSpecies(species[0]))
        }
    }, [species])


    return (
        <View style={styles.container}>
            <VerticalPlaceholder size={50}/>
            <Text style={styles.sectionTitle}>Name der Pflanze:</Text>
            <View style={styles.numberInputContainer}>
                <View style={styles.numberInputInnerContainer}>
                    <TextInput style={styles.numberInput} inputMode={"text"} placeholder="Gib einen Namen ein..." onChangeText={setName} value={name}/>
                </View>
            </View>
            <Text style={styles.sectionTitle}>Spezies:</Text>
            <View style={styles.dropdownContainer}>
                <CollapsibleBar style={styles.dropdown} title={
                    (chosenSpecies !== undefined && chosenSpecies !== null) ?
                        chosenSpecies.name
                    : "Spezies auswählen"}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <ScrollView style={styles.scrollDropdown}>
                            {species?.length === 0
                                ? <Text>Keine Spezies gefunden</Text>
                                : null
                            }
                            {species?.map(item =>
                                <View key={item.id}>
                                    <TouchableOpacity onPress={() => setChosenSpecies(item)}>
                                        <Text numberOfLines={1}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                                <VerticalPlaceholder size={8}/>
                            </ScrollView>
                        </LinearGradient>
                </CollapsibleBar>
            </View>
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
        alignSelf: "flex-start",
        marginLeft: 25,
    },
    boldText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    numberInput: {
        width: 280,
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "bottom",
        paddingBottom: 5,
        paddingTop: 5,
    },
    numberInputContainer: {
        width: 280,
        maxWidth: 280,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        marginTop: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowColor: "#000",
    },
    numberInputInnerContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 40,
        backgroundColor: "white",
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
    },
    sectionTitle: {
        alignSelf: "flex-start",
        fontSize: 18,
        color: "grey",
        marginTop: 20,
        marginLeft: 25,
        marginBottom: 5,
    },
    dropdown: {
        marginTop: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowColor: "#000",
    },
    detailContainer: {
        borderRadius: 15,
        padding: 10,
        paddingBottom: 20,
        width: 300,
    },
    scrollDropdown: {
        padding: 10,
        maxHeight: 300,
    },
    dropdownContainer: {
        width: 300,
    },
});