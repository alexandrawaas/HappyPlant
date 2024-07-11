import {useState} from 'react';
import { StyleSheet, View, Text } from "react-native";
import Draggable2 from "../../other/Draggable2";
import { LinearGradient } from "expo-linear-gradient";
import InventoryItem from "./InventoryItem";
import { TouchableOpacity } from "react-native";
import { commonStyles } from "../../../utils/styles/CommonStyles";
import Entypo from "react-native-vector-icons/Entypo";

export default function Inventory({ measures, processDrop, plants, onAddPlantPress, onDrag }) {
    const [isCollapsed, setIsCollapsed] = useState(plants.length != 0)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)} >
                <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.toggleContainer}>
                    <Text style={styles.containerTitle}>Inventar</Text>
                    <Entypo name={!isCollapsed ? 'chevron-up' : 'chevron-down'} color={'#98948f'} size={20} />
                </LinearGradient>
            </TouchableOpacity>

            {!isCollapsed && <View style={styles.detailContainer} >
                <View style={styles.plantsContainer}>
                    {plants.map((item, i) =>
                        <Draggable2 dropZoneMeasures={measures} color={item} key={i} onSuccesfulDrop={processDrop} onDrag={onDrag}>
                            <InventoryItem plant={item} />
                        </Draggable2>
                    )}
                </View>
                <View style={styles.addButtonContainer}>
                    <TouchableOpacity onPress={onAddPlantPress}>
                        <LinearGradient colors={['#fdfbef', '#fef1ed']} style={[styles.button, commonStyles.shadow]}>
                            <Text>+</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdfbef',
        borderRadius: 15,
        marginBottom: 15,
    },
    detailContainer: {
        borderRadius: 15,
        padding: 15,
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
    plantsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'center'
    },
    addButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 2.5,
        borderRadius: 5,
        marginTop: 5,
    }
});