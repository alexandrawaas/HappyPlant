import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from "react-native";
import {useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {plantMock} from "./PlantMock";
import RoundPictureNameComponent from "../species/RoundPictureNameComponent";
import {LinearGradient} from "expo-linear-gradient";
import {
    LightingTypeValueTranslations,
    LightingTypeTranslations,
    AssignmentTypeTranslations
} from "../../utils/EnumTranslations";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import {AssignmentTypeIcons} from "../../utils/EnumIcons";
import {Tooltip} from "react-native-elements";

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
                            <Text style={styles.text}>{plant.room.name}</Text>
                        </LinearGradient>
                    </View>
                    <Text style={styles.sectionTitle}>Bevorzugte Lichtverhältnisse</Text>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text style={styles.text}>{LightingTypeTranslations[plant.needs.lightingType]}</Text>
                            <View style={styles.badgesContainer}>
                                <View style={styles.lightingBadge}>
                                    <Text style={styles.text}>{LightingTypeValueTranslations[plant.needs.lightingType]}</Text>
                                </View>
                                <Tooltip height={150} width={280} backgroundColor="#cef2c8" popover={<Text>Der Lichtwert, bei dem sich die Pflanze am wohlsten fühlt. Es wird empfohlen, diesen zu beachten, er kann jedoch auch angepasst werden, da weitere Faktoren wie z.B. die Jahreszeit das Wohlbefinden der Pflanze beeinflussen können.</Text>}>
                                    <View style={styles.infoBadge}>
                                            <Text style={styles.infoBadgeText}>i</Text>
                                    </View>
                                </Tooltip>
                            </View>
                        </LinearGradient>
                    </View>
                    <Text style={styles.sectionTitle}>Aufgaben-Intervalle</Text>
                    {Object.entries(plant.needs.intervals).map(([k, v]) =>
                        <View style={styles.boxContainer} key={k}>
                            <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                                <Text style={styles.text}>{AssignmentTypeTranslations[k]}</Text>
                                <Text>alle {v} Tage</Text>
                            </LinearGradient>
                        </View>
                    )
                    }
                    <Text style={styles.sectionTitle}>Notizen</Text>
                    <View style={styles.boxContainer}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <Text style={styles.text}>{plant.notes}</Text>
                        </LinearGradient>
                    </View>
                </View>
                <VerticalPlaceholder size={150}/>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    scrollview: {
        padding: 10,
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
        fontSize: 16,
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
        display: "flex",
        flexDirection: "row",
        padding: 15,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-between",
    },
    badgesContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    infoBadge: {
        borderRadius: 50,
        borderColor: "grey",
        borderWidth: 1.5,
        width: 20,
        height: 20,
        alignItems: "center",
        marginHorizontal: 3,
    },
    infoBadgeText: {
        color: "grey",
        fontWeight: "bold",
    },
    lightingBadge: {
        borderRadius: 8,
        borderColor: "lightgrey",
        borderWidth: 1,
        width: 24,
        height: 24,
        alignItems: "center",
        marginHorizontal: 8,
        elevation: 1,
        backgroundColor: "#fdfbef",
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