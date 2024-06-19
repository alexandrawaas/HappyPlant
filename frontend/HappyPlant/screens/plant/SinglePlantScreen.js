import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from "react-native";
import {useIsFocused, useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import RoundPictureNameComponent from "../species/RoundPictureNameComponent";
import {LinearGradient} from "expo-linear-gradient";
import {
    LightingTypeValueTranslations,
    LightingTypeTranslations,
    AssignmentTypeTranslations
} from "../../utils/EnumTranslations";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import {RoomTypeIcons} from "../../utils/EnumIcons";
import {Tooltip} from "react-native-elements";
import EditButton from "../global/EditButton";
import Feather from "react-native-vector-icons/Feather";
import { fetchURL } from '../../utils/ApiService'

export default function SinglePlantScreen({ navigation }) {

    const route = useRoute();
    const { id } = route.params;
    const [plant, setPlant] = useState({});

    const isFocused = useIsFocused();

    useEffect(() => {
        fetchURL(`/plants/${id}`, 'GET', null, setPlant)
    }, [isFocused])

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: "Pflanzenprofil",
            headerRight: () => (
                <EditButton onPress={() => navigation.navigate("Pflanze bearbeiten", {id: plant.id})} />
            )
        })
    }, [navigation, plant])

    const addDays = (date, days)=> {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }


    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.container}>
                <RoundPictureNameComponent header={plant?.name} imageId={plant?.imageId} subHeader={plant?.species?.name}></RoundPictureNameComponent>
                <View style={styles.containerHorizontal}>
                    <Text style={styles.sectionTitle}>Raum</Text>
                    <Text style={styles.link} title={"AllRoomsButton"} onPress={() => {
                             try {navigation.navigate("rooms")}
                             catch (e) {
                             }
                         }
                         }>zu allen Räumen →</Text>
                     </View>
                <View style={styles.boxContainer}>
                    <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                        <View style={styles.roomContainer}>
                            { plant.room != null ? <View style={styles.roomIcon}>{RoomTypeIcons[plant.room.category]}</View>: null}
                            <Text style={styles.text}>{plant.room?.name ?? "Noch nicht platziert"}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <Text style={styles.sectionTitle}>Bevorzugte Lichtverhältnisse</Text>
                <View style={styles.boxContainer}>
                         <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                             <Text style={styles.text}>{LightingTypeTranslations[plant.needs?.lightingType ?? "Fehler"]}</Text>
                             <View style={styles.badgesContainer}>
                                 <View style={styles.lightingBadge}>
                                     <Text style={styles.text}>{LightingTypeValueTranslations[plant.needs?.lightingType ?? "Fehler"]}</Text>
                                 </View>
                                 <Tooltip height={150} width={280} backgroundColor="#cef2c8" popover={<Text>Der Lichtwert, bei dem sich die Pflanze am wohlsten fühlt. Es wird empfohlen, diesen zu beachten, er kann jedoch auch angepasst werden, da weitere Faktoren wie z.B. die Jahreszeit das Wohlbefinden der Pflanze beeinflussen können.</Text>}>
                                     <Feather name="info" color="grey" size={25}/>
                                 </Tooltip>
                             </View>
                         </LinearGradient>
                     </View>
                     <Text style={styles.sectionTitle}>Aufgaben-Intervalle</Text>
                    { plant.assignments !== undefined
                        ? plant.assignments.map
                        (
                            it =>
                            <View style={styles.boxContainer} key={it.id}>
                                <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                                    <Text style={[styles.text, styles.boldText]}>{AssignmentTypeTranslations[it.assignmentType]}</Text>
                                    <Text> { plant.needs.intervals[it.assignmentType] !== undefined ? (it.lastDone ? addDays(it.lastDone, plant.needs.intervals[it.assignmentType]).toLocaleDateString() : addDays(new Date(), plant.needs.intervals[it.assignmentType]).toLocaleDateString()) : ""} </Text>
                                </LinearGradient>
                            </View>
                        ) : null }

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
    roomIcon: {
        marginRight: 25,
    },
    roomContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
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
    boldText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    sectionTitle: {
        alignSelf: "flex-start",
        fontSize: 18,
        color: "grey",
        marginBottom: 10,
        marginTop: 10,
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
