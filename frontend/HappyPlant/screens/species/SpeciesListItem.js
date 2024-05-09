import { View, Text, StyleSheet, Button, Image } from "react-native";
import SpeciesListItemAddButton from "./SpeciesListItemAddButton";

export default function SpeciesListItem({ species }) {
    return (
        <View style={styles.container}>
            <View style={[styles.imageContainer, styles.shadowed]}>
                <Image style={styles.image}
                    source={require('../../assets/icon.png')}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.header}>{species.name}</Text>
                <Text style={styles.subHeader}>{species.family}</Text>
            </View>
            <SpeciesListItemAddButton
                title="+"
            />
        </View>
    );
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        paddingRight: 20,
        height: 100,
        backgroundColor: "#fef7ee",
    },
    imageContainer: {
        // backgroundColor: "green",
        borderRadius: 50,
        width: 70,
        height: 70,
    },
    image: {
        borderRadius: 50,
        width: 70,
        height: 70,
    },
    titleContainer: {
        display: "flex",
        padding: 10,
        width: 240,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subHeader: {
        fontSize: 14,
    }
});
