import { Text, View, StyleSheet } from "react-native"
import { fetchURL } from '../../../utils/ApiService'
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AssignmentTypeAsVerbTranslations } from "../../../utils/EnumTranslations";
import WarnIcon from "../../other/WarnIcon";
import AssignmentIcon from "../../other/AssignmentIcon";
import CollapsibleBar from "../../other/CollapsibleBar";

export default function SingleRoomWarnings({ room }) {
    const [plantIds, setPlantIds] = useState();
    const [assignments, setAssignments] = useState();
    const [warnings, setWarnings] = useState();

    useEffect(() => {
        if (room.id) {
            fetchURL(`/rooms/${room.id}/plants`, 'GET', null, 
                (plantsInRoom) => {
                    setPlantIds(plantsInRoom.map(x => x.id));
                    setWarnings(plantsInRoom.filter(x => !x.hasOptimalLightingCondition).map(x => x.name))
                }
            );
        }
    }, [room])

    useEffect(() => {
        fetchURL(`/assignments`, 'GET', null, (list) => {
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
                        <View style={styles.hintItem} key={name}>
                            <WarnIcon style={styles.icon} />
                            <Text numberOfLines={1}>Standort von {name} kann verbessert werden</Text>
                        </View>
                    )}
                    {assignments?.map(a =>
                        <View style={styles.hintItem} key={a.id}>
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