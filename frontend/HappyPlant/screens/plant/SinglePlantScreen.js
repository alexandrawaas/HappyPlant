import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Platform} from "react-native";
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { fetchURL } from '../../utils/ApiService'
import { commonStyles } from "../../utils/styles/CommonStyles";


export default function SinglePlantScreen({ navigation }) {
    const isFocused = useIsFocused();
    const route = useRoute();
    const { id } = route.params;
    const [plant, setPlant] = useState({});
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedAssignmentType, setSelectedAssignmentType] = useState(null);
    
    useEffect(() => {
        fetchURL(`/plants/${id}`, 'GET', null, navigation, setPlant)
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

    const calculateDates = (assignment) => {
        if(plant.needs.intervals[assignment.assignmentType] === undefined || plant.needs.intervals[assignment.assignmentType] === -1) return <Text></Text>
        const myDate = (assignment.lastDone
                    ? addDays(assignment.lastDone, plant.needs.intervals[assignment.assignmentType])
                    : addDays(new Date(), plant.needs.intervals[assignment.assignmentType]))
        return (
            <Text style={myDate <= new Date() ? styles.redText : styles.text}>
                {myDate.toLocaleDateString('de-DE', {year: "numeric", month: "2-digit", day: "2-digit"})}
            </Text>
        )
    }

    const showDatePicker = (assignmentType) => {
        setSelectedAssignmentType(assignmentType);
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        setSelectedDate(new Date());
        setSelectedAssignmentType(null);
    }

    const handleDateChange = (event, date) => {
        if (Platform.OS === 'android') {
            if (event.type === 'dismissed') {
                hideDatePicker();
                return;
            }
            if (event.type === 'set' && date !== undefined) {
                handleConfirm(date);
            }
        }

        if (Platform.OS === 'ios' && date !== undefined) {
            setSelectedDate(date);      
        }
    }

    const handleConfirm = (date) => {
        hideDatePicker();
        
        const updatedAssignment = {
            assignmentType: selectedAssignmentType,
            lastDone: date,
        };

        fetchURL(`/plants/${id}/assignments`, 'PATCH', updatedAssignment, navigation, () => {
            const updatedAssignments = plant.assignments.map(assignment =>
                assignment.assignmentType === updatedAssignment.assignmentType
                ? { ...assignment, lastDone: date }
                : assignment
            );
            setPlant({ ...plant, assignments: updatedAssignments });
        });
    }

    return (
        <View style={styles.screenContainer}>
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
                                 <Tooltip height={150} width={280} skipAndroidStatusBar={true} backgroundColor="#cef2c8" popover={<Text>Der Lichtwert, bei dem sich die Pflanze am wohlsten fühlt. Es wird empfohlen, diesen zu beachten, er kann jedoch auch angepasst werden, da weitere Faktoren wie z.B. die Jahreszeit das Wohlbefinden der Pflanze beeinflussen können.</Text>}>
                                     <Feather name="info" color="grey" size={25}/>
                                 </Tooltip>
                             </View>
                         </LinearGradient>
                     </View>
                     <Text style={styles.sectionTitle}>Aufgaben-Intervalle</Text>
                    { plant.assignments !== undefined
                        ? plant.assignments.map
                        (
                            it => plant.needs.intervals[it.assignmentType] !== undefined && plant.needs.intervals[it.assignmentType] !== -1 ?
                            <View style={styles.boxContainer} key={it.id}>
                                <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                                    <View style={styles.assignmentTextContainer}>
                                        <Text style={[styles.text, styles.boldText]}>{AssignmentTypeTranslations[it.assignmentType]}</Text>
                                    </View>
                                    {calculateDates(it)}
                                    <TouchableOpacity onPress={() => showDatePicker(it.assignmentType)}>
                                        <MaterialCommunityIcons 
                                            name="checkbox-marked-circle-outline"
                                            size={24}
                                            color='#000000'
                                        />
                                    </TouchableOpacity> 
                                </LinearGradient>
                            </View> : null
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
                 {isDatePickerVisible && Platform.OS === 'ios' && (
                    <View style={[styles.iosDatePickerOuterContainer, commonStyles.shadow]}>
                        <View style={styles.datePickerContainer}>
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="spinner"
                                onChange={handleDateChange}
                                maximumDate={new Date()}
                                locale="ger"
                            />
                            <View style={styles.iosButtonsContainer}>
                                <TouchableOpacity onPress={hideDatePicker} style={[styles.iosCancelButton, commonStyles.shadow]}>
                                    <Text style={styles.iosButtonText}>Abbrechen</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleConfirm(selectedDate)} style={[styles.iosConfirmButton, commonStyles.shadow]}>
                                    <Text style={styles.iosButtonText}>Bestätigen</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                {isDatePickerVisible && Platform.OS === 'android' && (
                    <View style={styles.datePickerContainer}>
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            display="spinner"
                            onChange={handleDateChange}
                            maximumDate={new Date()}
                            positiveButton={{ label: 'Bestätigen', textColor: '#5C724F' }}
                            negativeButton={{ label: 'Abbrechen', textColor: '#FFAAAA' }}
                        />
                    </View>
                )}
             </View>
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
    redText: {
        fontSize: 16,
        color: "red",
        fontWeight: "bold",
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
    },
    assignmentTextContainer: {
        width: 100,
    },
    datePickerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    iosDatePickerOuterContainer: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: '30%',
        left: 0,
        right: 0,
        transform: [{ translateY: -50 }],
        zIndex: 1000,
        borderRadius: 20,
    },
    iosButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
    iosConfirmButton: {
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginHorizontal: 10,
        width: 120,
    },
    iosCancelButton: {
        backgroundColor: '#FFAAAA',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginHorizontal: 10,
        width: 120,
    },
    iosButtonText: {
        color: '#233D0C',
        fontSize: 16,
    },
});
