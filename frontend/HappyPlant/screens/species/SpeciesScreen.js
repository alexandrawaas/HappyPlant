import { View, Text, StyleSheet, Button } from "react-native";
import speciesMock from "./SpeciesMock";
import SpeciesListItem from "./SpeciesListItem";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
// import Select from 'react-select';
import { API_URL } from "../../config";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

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
        <View>
            <Searchbar placeholder="Suche nach einer Spezies..." onChangeText={setSearchQuery} value={searchQuery}/>
            {/* <Select options={options}/> */}
            {Array.isArray(species) && species.length !== 0 
            ? species.map(i =>
                <SpeciesListItem
                    species={i} key={i.id}
                    onPressItem={() => navigation.navigate("Einzelne Pflanzenart")}
                    onPressAdd={() => navigation.navigate("Pflanze erstellen")}
                />
            )
            :<Text>Hier gibt es nichts anzuzeigen.</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

// NAV:
{/* <Button title="Aufgaben" onPress={()=> navigation.navigate("Aufgaben")} />
            <Button title="Räume" onPress={()=> navigation.navigate("Räume")} />
            <Button title="Meine Pflanzen" onPress={()=> navigation.navigate("Meine Pflanzen")} />
            <Button title="Einstellungen" onPress={()=> navigation.navigate("Einstellungen")} />
            <Button title="Einzelne Pflanzenart" onPress={()=> navigation.navigate("Einzelne Pflanzenart")} /> */}