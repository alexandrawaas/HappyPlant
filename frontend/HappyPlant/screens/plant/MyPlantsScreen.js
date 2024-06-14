import {ScrollView, StyleSheet, Text, View} from "react-native";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import AddRoomButton from "../room/AddRoomButton";
import PlantListItem from "./PlantListItem";
import {useEffect, useState} from "react";
import { fetchURL } from '../../utils/ApiService'
import {Searchbar} from "react-native-paper";

// TODO: remove plant mock and use fetch instead
export default function MyPlantsScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState("");
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetchURL('/plants', 'GET', null, setPlants)
    }, [])

    useEffect(() => {
        let url = '/plants?search=' + searchQuery
        fetchURL(url, 'GET', null, setPlants)
    }, [searchQuery])

    let handleAddPlantClick = () => {
        console.log("TODO: implement add plant dialog")
    }

    return (
        <View>
            <View style={styles.toolContainer}>
                <View style={[styles.searchContainer, styles.shadowed]}>
                    <Searchbar style={styles.searchBar}
                               placeholder="Suche nach einer Pflanze..." onChangeText={setSearchQuery} value={searchQuery}
                    />
                </View>
            </View>
            <ScrollView style={styles.container}>
                        <View style={styles.plantContainer}>
                        {
                            (plants.length === 0)
                                    ? <Text style={{alignSelf: "center", textAlign: "center", marginTop: "80%", width: "100%"}}>Keine Pflanzen angelegt</Text>
                                    :
                            plants.map(plant =>
                            <PlantListItem key={plant.id} plant={plant} onPress={(id) => navigation.navigate("Pflanzenprofil", {id: id})} />
                        )}
                        {plants.length % 2 === 1
                            ? <AddRoomButton onClick={handleAddPlantClick} displayAsCard />
                            : null
                        }
                        </View>
                        {plants.length % 2 === 0
                            ? <AddRoomButton onClick={handleAddPlantClick} displayOnNewLine />
                            : null}
                        <VerticalPlaceholder size={210}/>
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
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    plantContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    }
});