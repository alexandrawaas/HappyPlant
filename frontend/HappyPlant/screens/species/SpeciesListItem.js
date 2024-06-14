import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import SpeciesListItemAddButton from "./SpeciesListItemAddButton";
import { LinearGradient } from 'expo-linear-gradient';
import ImageComponent from "../global/ImageComponent";
import { commonStyles } from "../../utils/styles/CommonStyles";

export default function SpeciesListItem({ species, onPressItem, onPressAdd }) {
    return (
        <TouchableWithoutFeedback onPress={onPressItem}>
            <View style={styles.container} >
                <View style={[styles.imageContainer, commonStyles.shadow]}>
                    <LinearGradient colors={['#fdfbef', '#fef1ed']}>
                        <ImageComponent imageId={species.imageId} style={styles.ImageComponent}/>
                    </LinearGradient>
                </View>
                <View style={[styles.cardbox, commonStyles.shadow]}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.header}>{species.name}</Text>
                        <Text style={styles.subHeader}>{species.family}</Text>
                    </View>
                    <SpeciesListItemAddButton
                        onPress={onPressAdd}
                        title="+"
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        height: 100,
        marginBottom: 20,
    },
    imageContainer: {
        borderRadius: 50,
        width: 85,
        height: 85,
        overflow: "hidden",
        position: "absolute",
        left: 0,
        backgroundColor: "white",
    },
    ImageComponent:{
        width: 100,
        height: 100,
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

        paddingLeft: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleContainer: {
        display: "flex",
        padding: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subHeader: {
        fontSize: 14,
    },
});
