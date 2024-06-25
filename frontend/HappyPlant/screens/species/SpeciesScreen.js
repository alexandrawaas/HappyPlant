import { View, Text, StyleSheet, ScrollView } from "react-native";
import SpeciesListItem from "./SpeciesListItem";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import { commonStyles } from "../../utils/styles/CommonStyles";

export default function SpeciesScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/species`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
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
                <View style={[styles.searchContainer, commonStyles.shadow]}>
                    <Searchbar style={styles.searchBar}
                        placeholder="Suche nach einer Spezies..." onChangeText={setSearchQuery} value={searchQuery}
                    />
                </View>
            </View>
            
            <ScrollView>
                {Array.isArray(species) && species.length !== 0
                ? species.map(i =>
                    <SpeciesListItem
                        species={i} key={i.id}
                        onPressItem={() => navigation.navigate("Einzelne Pflanzenart", {id: i.id})}
                        onPressAdd={() => navigation.navigate("Neue Pflanze erstellen", {id: i})}
                    />
                )
                : <Text style={styles.fallBackText}>Keine Spezies gefunden.</Text>}
                <VerticalPlaceholder size={175}/>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    toolContainer: {
        marginBottom: 20,
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
