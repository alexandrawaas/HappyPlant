import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import fetchURL from "./RoomService";
import { useState, useEffect } from "react";
import Collapsible from "react-native-collapsible";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
import { AssignmentTypeAsVerbTranslations } from "../../utils/EnumTranslations";
import WarnIcon from "../other/WarnIcon";
import AssignmentIcon from "../other/AssignmentIcon";
import CollapsibleBar from "../other/CollapsibleBar";

export default function SingleRoomWarnings({ room }) {
    const [plantIds, setPlantIds] = useState();
    const [assignments, setAssignments] = useState();
    const [warnings, setWarnings] = useState();

    useEffect(() => {
        if (room.id) {
            fetchURL(`/rooms/${room.id}/plants`, 'GET',
                (plantsInRoom) => {
                    setPlantIds(plantsInRoom.map(x => x.id));
                    setWarnings(plantsInRoom.filter(x => !x.hasOptimalLightingCondition).map(x => x.name))
                }
            );
        }
    }, [room])

    useEffect(() => {
        fetchURL(`/assignments`, 'GET', (list) => {
            setAssignments(list.filter(i => plantIds?.includes(i.plantId)))
        })
    }, [plantIds])


    return (
        <View style={styles.container}>
            <CollapsibleBar title="Hinweise">
                <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                    {warnings?.length + assignments?.length === 0
                        ? <Text style={styles.hintItem}>Hier gibt es nichts zu tun.</Text>
                        : null
                    }
                    {warnings?.map(name =>
                        <View style={styles.hintItem}>
                            <WarnIcon style={styles.icon} />
                            <Text numberOfLines={1}>Standort von {name} kann verbessert werden</Text>
                        </View>
                    )}
                    {assignments?.map(a =>
                        <View style={styles.hintItem}>
                            <AssignmentIcon style={styles.icon} />
                            <Text numberOfLines={1}>{a.plantName} muss {AssignmentTypeAsVerbTranslations[a.assignmentType]} werden</Text>
                        </View>
                    )}
                </LinearGradient>
            </CollapsibleBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdfbef',
        borderRadius: 15,
    },
    toggleContainer: {
        borderRadius: 15,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerTitle: {
        fontSize: 16,
    },
    detailContainer: {
        borderRadius: 15,
        padding: 15,
    },
    hintItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    icon: {
        paddingRight: 5,
    }
})