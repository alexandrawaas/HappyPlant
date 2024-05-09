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
            {/* <View style={styles.titleContainer}>
                <Text style={styles.header}>{species.name}</Text>
                <Text style={styles.subHeader}>{species.family}</Text>
            </View>
            <SpeciesListItemAddButton
                title="+"
            /> */}
            <View style={[styles.cardbox, styles.shadowed]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.header}>{species.name}</Text>
                    <Text style={styles.subHeader}>{species.family}</Text>
                </View>
                <SpeciesListItemAddButton
                    title="+"
                />
            </View>
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
        flexDirection: "row",
        alignItems: "center",
        height: 100,
        margin: 10,
    },
    imageContainer: {
        borderRadius: 50,
        width: 85,
        height: 85,
        overflow: "hidden",
        position: "absolute",
        left: 0,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    cardbox: {
        flex: 1,
        height: "100%",
        marginLeft: 30,
        position: "relative",
        zIndex: -2,
        backgroundColor: "#fef7ee",
        borderRadius: 10,
        paddingRight: 20,

        paddingLeft: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
