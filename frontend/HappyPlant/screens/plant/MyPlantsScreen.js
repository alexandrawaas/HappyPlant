import {ScrollView, StyleSheet, View} from "react-native";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import AddRoomButton from "../room/AddRoomButton";
import PlantListItem from "./PlantListItem";
import {plantMock} from "./PlantMock";

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

    shadowed: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    container: {
        display: "flex",
        flexDirection: "column",
    },
    text: {
        fontSize:24,
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