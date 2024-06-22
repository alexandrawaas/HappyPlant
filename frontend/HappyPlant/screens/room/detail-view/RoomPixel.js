import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlantsOnPixelPopup from "./PlantsOnPixelPopup";
import AssignmentIcon from "../../other/AssignmentIcon";

export default function RoomPixel({navigation, item, cellSize}) {
    const [selectedPixel, setSelectedPixel] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handlePixelPress = (pixel) => {
        setSelectedPixel(pixel);
        setIsPopupVisible(true);
    };

    const getNumberOfWarningsForPixel = (pixel) => {
        const numberOfWarnings = pixel.plants.filter(x => !x.hasOptimalLightingCondition).length;
        return numberOfWarnings
    }

    const getNumberOfAssignmentsForPixel = (pixel) => {
        const numberOfAssignments = pixel.plants.map(x => x.assignments.length).reduce((a,b) => a + b);
        return numberOfAssignments;
    }

    const pixelStyle = (pixel) => {
        return {
            ...(pixel.isWindow ? styles.window : styles.cell),
            backgroundColor: lightColor[pixel.lightingType],
            width: cellSize,
            height: cellSize,
        }
    }

    return (<>
        {item.item.plants.length !== 0
            ? <>
                <TouchableOpacity
                    style={pixelStyle(item.item)}
                    onPress={() => handlePixelPress(item.item)}
                >
                    <View>
                        <FontAwesome5 name="seedling" color={'#233d0c'} size={25} />
                        <View style={styles.icon}>
                            {getNumberOfWarningsForPixel(item.item) !== 0 ? <WarnIcon /> : null}
                            {getNumberOfAssignmentsForPixel(item.item) !== 0 ? <AssignmentIcon /> : null}
                        </View>
                    </View>
                </TouchableOpacity>
                <PlantsOnPixelPopup
                    pixel={selectedPixel}
                    visible={isPopupVisible}
                    onClose={() => setIsPopupVisible(false)}
                    navigation={navigation}
                />
            </>
            : <View style={pixelStyle(item.item)} />
        }
    </>)
}

const lightColor = {
    "FULL_SHADE": "white",
    "PART_SHADE": "#fcf8d7",
    "SUN": "#fff49e",
    "FULL_SUN": "#ffed5c",
}

const styles = StyleSheet.create({
    cell: {
        borderWidth: 0.5,
        borderColor: 'grey',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    window: {
        borderWidth: 2,
        borderColor: 'lightblue',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        position: 'absolute',
        top: -10,
        right: -10,
    }
});
