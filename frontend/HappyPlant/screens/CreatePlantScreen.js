import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput, Pressable, Image} from "react-native";
import {useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import { fetchURL } from '../utils/ApiService'
import RoundPictureNameComponent from "./species/RoundPictureNameComponent";
import {LinearGradient} from "expo-linear-gradient";
import {
    AssignmentTypeTranslations,
} from "../utils/EnumTranslations";
import {Input, Tooltip} from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";
import VerticalPlaceholder from "../utils/styles/VerticalPlaceholder";
import * as ImagePicker from 'expo-image-picker';
import { useActionSheet } from '@expo/react-native-action-sheet';

export default function CreatePlantScreen({ navigation }) {
    const [imageData, setImageData] = useState(undefined);

    const route = useRoute();
    const { id } = route.params;
    const [plant, setPlant] = useState({});
    const { showActionSheetWithOptions } = useActionSheet();

    const showActionSheet = () => {
        const options = ['Neues Foto aufnehmen', 'Foto aus Bibliothek aussuchen', 'Abbrechen'];
        const cancelButtonIndex = 2;
    
        showActionSheetWithOptions(
          {
            options,
            cancelButtonIndex,
          },
          (buttonIndex) => {
            if (buttonIndex === 0) {
              handleTakePhoto();
            } else if (buttonIndex === 1) {
              handleChoosePhoto();
            }
          }
        );
    };

    useEffect(() => {
        fetchURL(`/plants/${id}`, 'GET', null, setPlant)
    }, [])

    useEffect(() => {
        navigation.setOptions({
            ...navigation.options,
            headerTitle: "Pflanze bearbeiten",
            headerRight: () => (
                <TouchableOpacity onPress={() => console.log("submit Button pressed")} style={{margin: 8}}>
                    <Feather name="check" color="grey" size={25}/>
                </TouchableOpacity>
            )
        })
    }, [navigation, plant])

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [1, 1],
            quality: 1,
          });
      
          if (!result.canceled) {
            setImageData(result.assets[0])
            //navigation.navigate("Foto hochladen", {photo: result.assets[0], plantId: plant.id})
          }
    };
    
    const handleTakePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        if (!result.canceled) {
            setImageData(result.assets[0])
          //navigation.navigate('Foto hochladen', { photo: result.assets[0], plantId: plant.id });
        }
    };

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.container}>
                <Pressable onPress={showActionSheet}>
                    {imageData 
                        ? <RoundPictureNameComponent header={plant?.name} subHeader={plant?.species?.name} raw={true} imageData={imageData}></RoundPictureNameComponent>
                        : <RoundPictureNameComponent header={plant?.name} subHeader={plant?.species?.name} imageId={plant.imageId}></RoundPictureNameComponent>
                    }
                </Pressable>
                <VerticalPlaceholder size={20}/>
                <Text style={styles.sectionTitle}>Bevorzugte Lichtverhältnisse</Text>
                <View style={styles.boxContainer}>
                    <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                        <View style={styles.badgesContainer}>
                            <Tooltip height={150} width={280} backgroundColor="#cef2c8" popover={<Text>Der Lichtwert, bei dem sich die Pflanze am wohlsten fühlt. Es wird empfohlen, diesen zu beachten, er kann jedoch auch angepasst werden, da weitere Faktoren wie z.B. die Jahreszeit das Wohlbefinden der Pflanze beeinflussen können.</Text>}>
                                <Feather name="info" color="grey" size={25}/>
                            </Tooltip>
                        </View>
                    </LinearGradient>
                </View>
                <Text style={styles.sectionTitle}>Aufgaben-Intervalle</Text>
                { plant.needs !== undefined ? Object.entries(plant.needs?.intervals).map(([k, v]) =>
                        <View style={styles.boxContainer} key={k}>
                            <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                                <Text style={[styles.text, styles.boldText]}>{AssignmentTypeTranslations[k]}</Text>
                                <View style={styles.numberInputContainer}>
                                    <Text>alle</Text>
                                    <View style={styles.numberInputInnerContainer}>
                                        <TextInput mode={"outline"} inputMode={"numeric"} style={styles.numberInput} maxLength={3}>{v}</TextInput>
                                    </View>
                                    <Text>Tage</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    )
                    : null }
                <Text style={styles.sectionTitle}>Notizen</Text>
                <View style={styles.boxContainer}>
                    <LinearGradient colors={['#fdfbef', '#fef1ed']} style={[styles.detailContainer, styles.notesContainer]}>
                        <Input style={[styles.notesText, styles.text]} multiline={true} maxLength={400}>{plant.notes}</Input>
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
    },
    numberInput: {
        width: 40,
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "bottom",
        paddingBottom: 5,
        paddingTop: 5,
    },
    numberInputContainer: {
        width: 200,
        maxWidth: 300,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    numberInputInnerContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "bottom",
        justifyContent: "center",
        width: 60,
        height: 30,
        backgroundColor: "#f5eae7",
        borderRadius: 10,
        marginHorizontal: 10,
    },
    notesText: {
        fontSize: 16,
        textAlignVertical: "bottom",
        paddingTop: 15,
    },
    notesContainer: {
        paddingTop: 10,
        paddingBottom: 2,
    }
});