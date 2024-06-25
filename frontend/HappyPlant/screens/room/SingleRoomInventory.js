import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import CollapsibleBar from "../other/CollapsibleBar"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { fetchURL } from '../../utils/ApiService'
import InventoryItem from "./InventoryItem"
import { commonStyles } from "../../utils/styles/CommonStyles"

export default function SingleRoomInventory({ room, handleAddPlantToInventoryPress }) {
    const [inventory, setInventory] = useState();

    useEffect(() => {
        fetchURL(`/inventory`, 'GET', null, setInventory);
    }, [])

    return (
        <View style={styles.container}>
            <CollapsibleBar title="Inventar">
                <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.detailContainer}>
                    <View style={styles.plantsContainer}>
                        {inventory?.map(p =>
                            <InventoryItem plant={p} key={p.id} />
                        )}
                    </View>
                    <View style={styles.addButtonContainer}>
                        <TouchableOpacity onPress={handleAddPlantToInventoryPress}>
                            <LinearGradient colors={['#fdfbef', '#fef1ed']} style={[styles.button, commonStyles.shadow]}>
                                <Text>+</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </CollapsibleBar>
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
})