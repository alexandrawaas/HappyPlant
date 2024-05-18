import { View, Text, StyleSheet } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function InventoryItem({plant, style}) {
    return (
        <View style={[styles.container, style]} key={plant.id}>
            <FontAwesome5 name="seedling" color={'#233d0c'} size={25} />
            <Text numberOfLines={1}>{plant.name.trim()}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        maxWidth: 50,
        alignItems: 'center',
        margin: 10,
    },
})