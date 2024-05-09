import {View, Text, StyleSheet, Button} from "react-native";
import speciesMock from "./SpeciesMock";
import SpeciesListItem from "./SpeciesListItem";
// import { Searchbar } from 'react-native-paper';
import { useState } from "react";
// import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function SpeciesScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <View>
            {/* <Searchbar placeholder="Suche nach einer Spezies..." onChangeText={setSearchQuery} value={searchQuery}/> */}
            {/* <Select options={options}/> */}
            {speciesMock.map(i => <SpeciesListItem species={i} key={i.id}></SpeciesListItem>)}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:24,
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