import {Image, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import ImageComponent from "../global/ImageComponent";
import { commonStyles } from "../../utils/styles/CommonStyles";

export default function RoundPictureNameComponent({header, subHeader, isListItem, imageId, raw = false, imageData, isEditable = false}) {
    return <>
        <View style={styles.topContainer}>
            <View style={[styles.imageContainer, commonStyles.shadow]}>
                {isEditable
                    ?<Image source={require('../../assets/TabNav Icons/camera_icon.png')} style={{...styles.image, position: 'absolute', top: 0, left: 0, zIndex:2 }}></Image>
                    :<></>
                }
                 <ImageComponent style={styles.image} imageId={imageId} raw={raw} imageData={imageData}/>
            </View>
            <Text numberOfLines={1} style={[styles.header, isListItem ? styles.listItemTextFormat : {}]}>{header}</Text>
            <Text numberOfLines={1} style={[styles.subHeader, isListItem ? styles.listItemTextFormat : {}]}>{subHeader}</Text>
        </View>
    </>;
}

const styles = StyleSheet.create({
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