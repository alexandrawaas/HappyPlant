import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from "react-native";
import {useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {plantMock} from "./plant/PlantMock";
import RoundPictureNameComponent from "./species/RoundPictureNameComponent";
import CollapsibleBar from "./other/CollapsibleBar";
import InventoryItem from "./room/InventoryItem";
import {LinearGradient} from "expo-linear-gradient";
import WarnIcon from "./other/WarnIcon";
import AssignmentIcon from "./other/AssignmentIcon";
import {AssignmentTypeAsVerbTranslations} from "../utils/EnumTranslations";
import VerticalPlaceholder from "../utils/styles/VerticalPlaceholder";

export default function SinglePlantScreen({ navigation }) {

    const route = useRoute();
    const { id } = route.params ?? {id: "77ce460c-9dc3-463a-89a9-3b2a3803752e"};
    const [plant, setPlant] = useState(plantMock.find(plant => plant.id === id));

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: "Pflanzenprofil"
        })
    }, [navigation, plant])

    return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <RoundPictureNameComponent header={plant.name} subHeader={plant.species.name}></RoundPictureNameComponent>
                    <View style={styles.containerHorizontal}>
                        <Text style={styles.sectionTitle}>Raum</Text>
                        <Text style={styles.link} title={"AllRoomsButton"}>zu allen Räumen →</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text>Wohnzimmer</Text>
                        </LinearGradient>
                    </View>
                    <Text style={styles.sectionTitle}>Lichtwert</Text>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text>{plant.needs.lightingType}</Text>
                        </LinearGradient>
                    </View>
                    <Text style={styles.sectionTitle}>Aufgaben-Intervalle</Text>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text>Gießen: alle 3 Tage</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text>Düngen: alle 30 Tage</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text>Umtopfen: alle 365 Tage</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text>{plant.needs.intervals.CUTTING}: alle x Tage</Text>
                        </LinearGradient>
                    </View>
                    <Text style={styles.sectionTitle}>Notizen</Text>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text>{plant.notes}</Text>
                        </LinearGradient>
                    </View>
                </View>
                <VerticalPlaceholder size={150}/>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    scrollview: {
        padding: 10
    },
    shadowed: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
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
        fontSize:24,
        fontWeight: "bold",
        marginBottom: 16,
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
        padding: 15,
        borderRadius: 15
    }
    });


// <View style={styles.boxContainer}>
//                     <CollapsibleBar title={"Raum"} children={
//                         <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
//                             <View>
//                                 <Text numberOfLines={1}> x muss y werden</Text>
//                             </View>
//                         </LinearGradient>
//                     }></CollapsibleBar>
//                 </View>