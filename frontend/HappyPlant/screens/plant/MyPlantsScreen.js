import {ScrollView, StyleSheet, Text, View} from "react-native";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import AddRoomButton from "../room/AddRoomButton";
import PlantListItem from "./PlantListItem";
import {plantMock} from "./PlantMock";
import {roomMock} from "../room/RoomMock";
import {useEffect, useState} from "react";
import fetchURL from "../../utils/ApiService";

// TODO: remove plant mock and use fetch instead
export default function MyPlantsScreen({ navigation }) {

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetchURL('/plants', 'GET', setPlants)
    }, [])

    let handleAddPlantClick = () => {
        console.log("TODO: implement add plant dialog")
    }

    return (
        <ScrollView style={styles.container}>
                <View>
                    <View style={styles.plantContainer}>
                    {
                        plants.length === 3
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
                    <VerticalPlaceholder size={130}/>
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    plantContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    }
});