import {ScrollView, StyleSheet, View} from "react-native";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import AddRoomButton from "../room/AddRoomButton";
import PlantListItem from "./PlantListItem";
import {plantMock} from "./PlantMock";

// TODO: remove plant mock and use fetch instead
export default function MyPlantsScreen({ navigation }) {

    let handleAddPlantClick = () => {
        console.log("TODO: implement add plant dialog")
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.plantContainer}>
                {plantMock.map(plant =>
                    <PlantListItem key={plant.id} plant={plant} onPress={(id) => navigation.navigate("Pflanzenprofil", {id: id})} />
                )}
                {plantMock.length % 2 == 1
                    ? <AddRoomButton onClick={handleAddPlantClick} displayAsCard />
                    : null
                }
            </View>
            {plantMock.length % 2 == 0
                ? <AddRoomButton onClick={handleAddPlantClick} displayOnNewLine />
                : null}
            <VerticalPlaceholder size={130}/>
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