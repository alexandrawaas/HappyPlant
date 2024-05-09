import { View, Text, StyleSheet } from "react-native";
import SpeciesListItem from "./SpeciesListItem";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

export default function SpeciesScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/species`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => Array.isArray(data) ? setSpecies(data) : speciesMock)
    }, [])

    useEffect(() => {
        fetch(`${API_URL}/species?search=${searchQuery}`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
    }, [searchQuery])

    return (
        <View style={styles.container}>
            <View style={styles.toolContainer}>
                <View style={[styles.searchContainer, styles.shadowed]}>
                    <Searchbar style={styles.searchBar}
                        placeholder="Suche nach einer Spezies..." onChangeText={setSearchQuery} value={searchQuery}
                    />
                </View>
            </View>
            
            {Array.isArray(species) && species.length !== 0
                ? species.map(i =>
                    <SpeciesListItem
                        species={i} key={i.id}
                        onPressItem={() => navigation.navigate("Einzelne Pflanzenart", {id: i.id})}
                        onPressAdd={() => navigation.navigate("Pflanze erstellen", {id: i.id})}
                    />
                )
                : <Text style={styles.fallBackText}>Keine Spezies gefunden.</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    shadowed: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    container: {
        paddingTop: 15,
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "column",
    },
    toolContainer: {
        marginBottom: 30,
    },  
    searchContainer: {
        backgroundColor: "red",
        borderRadius: 10,
    },
    searchBar: {
        background: "linear-gradient(180deg, #FFFFFF 0%, #00000 100%)",
        backgroundColor: "#fef7ee",
        borderRadius: 10,
    },
    fallBackText: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
    }
});

// NAV:
{/* <Button title="Aufgaben" onPress={()=> navigation.navigate("Aufgaben")} />
            <Button title="Räume" onPress={()=> navigation.navigate("Räume")} />
            <Button title="Meine Pflanzen" onPress={()=> navigation.navigate("Meine Pflanzen")} />
            <Button title="Einstellungen" onPress={()=> navigation.navigate("Einstellungen")} />
            <Button title="Einzelne Pflanzenart" onPress={()=> navigation.navigate("Einzelne Pflanzenart")} /> */}