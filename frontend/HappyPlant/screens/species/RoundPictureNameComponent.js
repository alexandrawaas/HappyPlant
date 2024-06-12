import {Image, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import ImageComponent from "../global/ImageComponent";

export default function RoundPictureNameComponent({header, subHeader, isListItem, imageId}) {
    return <>
        <View style={styles.topContainer}>
            <View style={[styles.imageContainer, styles.shadowed]}>
                <LinearGradient colors={["#fdfbef", "#fef1ed"]}>
                    <ImageComponent style={styles.image} imageId={imageId}
                    />
                </LinearGradient>
            </View>
            <Text numberOfLines={1} style={[styles.header, isListItem ? styles.listItemTextFormat : {}]}>{header}</Text>
            <Text numberOfLines={1} style={[styles.subHeader, isListItem ? styles.listItemTextFormat : {}]}>{subHeader}</Text>
        </View>
    </>;
}

const styles = StyleSheet.create({
        shadowed: {
            elevation: 4,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
        },
        topContainer: {
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 5,
         },
        imageContainer: {
            borderRadius: 70,
            width: 113,
            height: 113,
            overflow: "hidden",
            backgroundColor: "white",
        },
        image: {
            width: "100%",
            height: "100%",
        },
        header: {
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10
        },
        subHeader: {
            fontSize: 14,
        },
        listItemTextFormat: {
            fontSize: 14,
            width: 116,
            textAlign: "center",
        }
    }
);