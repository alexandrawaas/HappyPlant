import {View, Text, StyleSheet, Image, ScrollView,} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import { API_URL } from "../../config";
import NeedLabelWithIcon from "./NeedLabelWithIcon";
import { LinearGradient } from 'expo-linear-gradient';
import AddSpeciesAsPlantButton from "../global/AddSpeciesAsPlantButton";

export default function SingleSpeciesScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params;
    const [species, setSpecies] = useState({})

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerRight: () => (
                <AddSpeciesAsPlantButton onPress={() => alert('This is a button!')} />
            )
        })
    }, [navigation])

    useEffect(() => {
        fetch(`${API_URL}/species/${id}`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
    }, [])

    return (
        <LinearGradient colors={['#fdfbef', '#f6ffed']} style={[styles.container, styles.shadowed]}>
            <ScrollView>
            <View style={styles.topContainer}>
                <View style={[styles.imageContainer, styles.shadowed]}>
                    <LinearGradient colors={['#fdfbef', '#fef1ed']} >
                        <Image style={styles.image}
                            source={require('../../assets/adaptive-icon.png')}
                        />
                    </LinearGradient>
                </View>
                <Text style={styles.header}>{species.name}</Text>
                <Text style={styles.subHeader}>{species.latinName}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.header2}>Bevorzugte Lichtverhältnisse</Text>
                <NeedLabelWithIcon assignmentType="LIGHTING" value={species?.needs?.lightingType}/>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.header2}>Überblick</Text>
                <View style={styles.pairedNeedContainer}>
                    {species?.needs?.intervals
                    ? Object.entries(species.needs.intervals).map(([k, v]) => 
                        <NeedLabelWithIcon assignmentType={k} value={v} key={k}/>
                    )
                    : null}
                </View> 

                <Text style={styles.header2}>Information</Text>
                <Text style={styles.informationBlock}>Diese Pflanze gehört zur Familie der {species.family}. {species.description}</Text>
            </View>
            <View />
            </ScrollView>
        </LinearGradient>
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
    }
});