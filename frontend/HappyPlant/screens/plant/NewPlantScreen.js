import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Pressable, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useRoute } from "@react-navigation/native";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import Feather from "react-native-vector-icons/Feather";
import CollapsibleBar from "../other/CollapsibleBar";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles } from "../../utils/styles/CommonStyles";
import RoundPictureNameComponent from "../species/RoundPictureNameComponent";
import { fetchURL, fetchURLUploadImage } from "../../utils/ApiService";
import { useImageSelecetion } from "../../utils/useImageSelection";

export default function NewPlantScreen({ navigation }) {
    const [species, setSpecies] = useState([]);
    const [name, setName] = useState("");

    let route = useRoute();
    const { id } = route.params;

    const [chosenSpecies, setChosenSpecies] = useState(id);
    const [nameWarningEnabled, setNameWarningEnabled] = useState(false)

    const [imageData, disableSend, showActionSheet] = useImageSelecetion();

    const handleContinue = async () => {
        if (!disableSend) {
            let shouldCancel = false;
            if (name.length < 1 || name.length > 50) {
                setNameWarningEnabled(true);
                shouldCancel = true;
            }

            if (shouldCancel) { return; }

            const payload = {
                name: name,
                speciesId: chosenSpecies.id,
            };

            const sendImage = (data) => {
                if (imageData) {
                    fetchURLUploadImage(data.id, imageData)
                        .then(() => { navigation.navigate('Meine Pflanzen') });
                } else {
                    navigation.navigate('Meine Pflanzen')
                }
            }

            fetchURL('/plants', 'POST', payload, navigation, sendImage)
        }
    }

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: "Neue Pflanze",
            headerRight: () => (
                <TouchableOpacity onPress={handleContinue} style={{ margin: 8 }}>
                    {!disableSend?
                    <Feather name="check" color={name.length > 0?"dodgerblue":"grey"} size={25}/>
                    :<ActivityIndicator size="small" color="grey"/>}
                </TouchableOpacity>
            )
        })
    });

    useEffect(() => {
        fetch(`${API_URL}/species`)
            .catch(err => console.dir(err))
            .then(response => response.json())
            .then(data => setSpecies(data))
    }, [])

    useEffect(() => {
        if (chosenSpecies === undefined || chosenSpecies === null) 
        {
            (id !== null ? setChosenSpecies(species.filter(x => x.id === id)) : setChosenSpecies(species[0]))
        }
    }, [species])

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
                <Pressable onPress={showActionSheet}>
                    {imageData
                        ? <RoundPictureNameComponent header={name} subHeader={chosenSpecies?.name} raw={true} imageData={imageData} isEditable={true}></RoundPictureNameComponent>
                        : <RoundPictureNameComponent header={name} subHeader={chosenSpecies?.name} isEditable={true}></RoundPictureNameComponent>
                    }
                </Pressable>
                <Text style={styles.sectionTitle}>Name der Pflanze</Text>
                <View style={styles.textInputContainer}>
                    <View style={[styles.textInputInnerContainer]}>
                        <TextInput style={styles.textInput} inputMode={"text"} placeholder="Gib einen Namen ein..." onChangeText={setName} value={name} />
                    </View>
                </View>
                {nameWarningEnabled &&
                    <Text style={styles.warning}>Der Pflanzenname muss zwischen 1 und 50 Zeichen lang sein.</Text>
                }
                <Text style={styles.sectionTitle}>Spezies</Text>
                <View style={styles.dropdownContainer}>
                    <CollapsibleBar style={styles.dropdown} title={
                        (chosenSpecies !== undefined && chosenSpecies !== null) ?
                            chosenSpecies.name
                            : "Spezies auswählen"}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                            <ScrollView style={styles.scrollDropdown}
                                showsVerticalScrollIndicator={true}
                            >
                                {species?.length === 0
                                    ? <Text>Keine Spezies gefunden</Text>
                                    : null
                                }
                                {species?.map(item =>
                                    <View key={item.id}>
                                        <TouchableOpacity onPress={() => setChosenSpecies(item)}>
                                            <Text style={styles.dropdownText} numberOfLines={1}>{item.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                <VerticalPlaceholder size={8} />
                            </ScrollView>
                        </LinearGradient>
                    </CollapsibleBar>
                </View>
                <VerticalPlaceholder size={120} />
        </View>
        </TouchableWithoutFeedback>
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
    warning: {
        color: "red",
        marginTop: 10,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "top",
        padding: 10,
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
        alignSelf: "flex-start",
    },

    boldText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    textInput: {
        width: '90%',
        fontSize: 16,
        textAlign: "left",
        textAlignVertical: "bottom",
        paddingBottom: 5,
        paddingTop: 5,
        color: "black",
    },
    textInputContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    textInputInnerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: 40,
        backgroundColor: '#fef7ee',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
    },
    notesText: {
        fontSize: 16,
        textAlignVertical: "bottom",
        paddingTop: 15,
    },
    notesContainer: {
        paddingTop: 10,
        paddingBottom: 2,
    },
    sectionTitle: {
        alignSelf: "center",
        fontSize: 18,
        color: "grey",
        marginTop: 20,
        marginBottom: 10,
        width: '100%'
    },
    dropdown: {
        marginTop: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowColor: "#000",
        height: '30%'
    },
    detailContainer: {
        borderRadius: 15,
        padding: 10,
        paddingBottom: 20,
        width: '100%',
    },
    scrollDropdown: {
        padding: 10,
        paddingTop: 6,
        height: 90,
    },
    dropdownContainer: {
        width: '100%',
        backgroundColor: '#fdfbef',
        borderRadius: 15,
    },
    dropdownText: {
        fontSize: 16,
        color: "black",
        marginBottom: 15,
    },
});