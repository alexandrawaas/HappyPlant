import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import CollapsibleBar from "../other/CollapsibleBar"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import fetchURL from "../../utils/ApiService"
import InventoryItem from "./InventoryItem"

export default function SingleRoomInventory({ room }) {
    const [inventory, setInventory] = useState();

    useEffect(() => {
        fetchURL(`/inventory`, 'GET', setInventory);
    }, [])

    const handleAddPlantToInventoryPress = () => {
        console.log("TODO: implement create plant dialog")
    }

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
                            <LinearGradient colors={['#fdfbef', '#fef1ed']} style={[styles.button, styles.shadowed]}>
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
    shadowed: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
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