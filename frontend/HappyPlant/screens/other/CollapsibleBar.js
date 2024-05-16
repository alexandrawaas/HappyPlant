import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Collapsible from "react-native-collapsible";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
import { AssignmentTypeAsVerbTranslations } from "../../utils/EnumTranslations";
import WarnIcon from "../other/WarnIcon";
import AssignmentIcon from "../other/AssignmentIcon";
import { useState } from "react";

export default function CollapsibleBar({ title, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (<>
        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} >
            <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.toggleContainer}>
                <Text style={styles.containerTitle}>{title}</Text>
                <Entypo name={isCollapsed ? 'chevron-up' : 'chevron-down'} color={'#98948f'} size={20} />
            </LinearGradient>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed}>
            {children}
        </Collapsible>
    </>)
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