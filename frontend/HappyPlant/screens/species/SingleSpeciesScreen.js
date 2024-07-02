import {Button, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import React, {useEffect, useState} from "react";
import {useRoute} from '@react-navigation/native';
import {API_URL} from "../../config";
import NeedLabelWithIcon from "./NeedLabelWithIcon";
import {LinearGradient} from 'expo-linear-gradient';
import RoundPictureNameComponent from "./RoundPictureNameComponent";
import { commonStyles } from "../../utils/styles/CommonStyles";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";

export default function SingleSpeciesScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params;
    const [species, setSpecies] = useState({})

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
        })
    }, [navigation])

    useEffect(() => {
        fetch(`${API_URL}/species/${id}`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
    }, [])

    return (
        <LinearGradient colors={['#fdfbef', '#f6ffed']} style={[styles.container, commonStyles.shadow]}>
            <ScrollView>
                <RoundPictureNameComponent header={species.name} subHeader={species.latinName} imageId={species.imageId}/>
                <View style={styles.detailContainer}>
                    <Text style={styles.header2}>Bevorzugte Lichtverhältnisse</Text>
                    <NeedLabelWithIcon assignmentType="LIGHTING" value={species?.needs?.lightingType}/>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.header2}>Überblick</Text>
                    <View style={styles.pairedNeedContainer}>
                        {species?.needs?.intervals
                            ? Object.entries(species.needs.intervals).map(([k, v]) =>
                                v !== -1 ? <NeedLabelWithIcon assignmentType={k} value={v} key={k}/>
                                    : <NeedLabelWithIcon assignmentType={k} value={""} key={k}/>
                            )
                            : null}
                    </View>

                    <Text style={styles.header2}>Information</Text>
                    <Text style={styles.informationBlock}>Diese Pflanze gehört zur Familie
                        der {species.family}. {species.description}</Text>
                </View>
                <TouchableOpacity style={[styles.button, commonStyles.shadow]} onPress={() => navigation.navigate("Neue Pflanze erstellen", {id: species})}>
                    <Text style={styles.buttonText}>Als neue Pflanze hinzufügen</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        padding: 20,
    },
    topContainer: {
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 5,
    },
    imageContainer: {
        borderRadius: 100,
        width: 200,
        height: 200,
        overflow: "hidden",
        backgroundColor: "white",
    },
    imageComponent:{
        width: 200,
        height: 200,
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
        marginTop: 20,
        marginBottom: 5,
    },
    pairedNeedContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    informationBlock: {
        textAlign: "justify"
    },
    button: {
        top: Platform.OS === 'ios' ? 40 : 30,
        zIndex: 1,
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
        marginBottom: 150,
    }
});