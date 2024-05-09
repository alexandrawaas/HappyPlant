import {View, Text, StyleSheet, Image,} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import { API_URL } from "../../config";
import { LightingTypeTranslations, AssignmentTypeTranslations } from "../../utils/EnumTranslations";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AssignmentTypeIcons } from "../../utils/EnumIcons";
import { Tooltip } from "react-native-elements";
import NeedLabelWithIcon from "./NeedLabelWithIcon";

export default function SingleSpeciesScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params;
    const [species, setSpecies] = useState({})

    useEffect(() => {
        fetch(`${API_URL}/species/${id}`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
    }, [])

    return (
        <View style={[styles.container, styles.shadowed]}>
            <View style={styles.topContainer}>
                <View style={[styles.imageContainer, styles.shadowed]}>
                    <Image style={styles.image}
                        source={require('../../assets/adaptive-icon.png')}
                    />
                </View>
                <Text style={styles.header}>{species.name}</Text>
                <Text style={styles.subHeader}>{species.latinName}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.header2}>Überblick</Text>
                <NeedLabelWithIcon assignmentType="LIGHTING" value={species?.needs?.lightingType}/>
                <View style={styles.pairedNeedContainer}>
                    <NeedLabelWithIcon assignmentType="WATERING" value={species?.needs?.intervals.WATERING}/>
                    <NeedLabelWithIcon assignmentType="FERTILIZING" value={species?.needs?.intervals.FERTILIZING}/>
                </View>
                <View style={styles.pairedNeedContainer}>
                    <NeedLabelWithIcon assignmentType="REPOTTING" value={species?.needs?.intervals.REPOTTING}/>
                    <NeedLabelWithIcon assignmentType="CUTTING" value={species?.needs?.intervals.CUTTING}/>
                </View>

                <Text style={styles.header2}>Information</Text>
                <Text style={styles.informationBlock}>Diese Pflanze gehört zur Familie der {species.family}. {species.description}</Text>
            </View>
        </View>
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
        backgroundColor: "#fef7ee",
        minHeight: "100%",
        margin: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        padding: 20,
    },
    topContainer: {
        backgroundColor: "#fef7ee",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 5,
    },
    imageContainer: {
        borderRadius: 70,
        width: 113,
        height: 113,
        overflow: "hidden",
        backgroundColor: "white",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    subHeader: {
        fontSize: 14,
    },
    header2: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
    },
    pairedNeedContainer: {
        display: "flex",
        flexDirection: "row"
    },
    informationBlock: {
        textAlign: "justify"
    }
});