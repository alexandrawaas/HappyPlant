import { useEffect } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PlantsOnPixelPopup from "./PlantsOnPixelPopup";

const GLOBAL_PADDING = 2 * 20;

export default function SingleRoomGrid({ navigation, room }) {
    const data = Array.from({ length: room.y }, (_, rowIndex) =>
        Array.from({ length: room.x }, (_, colIndex) => ({
            key: `${rowIndex}-${colIndex}`,
            item: room.grid.find(p => p.x == colIndex && p.y == rowIndex)
        }))
    ).flat();
    const { width, height } = useWindowDimensions();

    let cellSize = (width - GLOBAL_PADDING) / room.x;
    if (cellSize * room.y > 0.4 * height) {
        cellSize = (0.4 * height) / room.y
    }

    const [selectedPixel, setSelectedPixel] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handlePixelPress = (pixel) => {
        setSelectedPixel(pixel);
        setIsPopupVisible(true);
    };

    const pixelStyle = (pixel) => {
        return {
            ...(pixel.isWindow ? styles.window : styles.cell),
            backgroundColor: lightColor[pixel.lightingType],
            width: cellSize,
            height: cellSize,
        }
    }

    const renderItem = ({ item }) => (<>
        {item.item.plants.length !== 0
            ? <>
                <TouchableOpacity
                    style={pixelStyle(item.item)}
                    onPress={() => handlePixelPress(item.item)}
                >
                    <View>
                        <FontAwesome5 name="seedling" color={'#233d0c'} size={25} />
                        {/* TODO: add pixel specific warning/assignment icon */}
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
    </>);

    return (
        <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={renderItem}
            numColumns={room.x}
            contentContainerStyle={styles.grid}
            style={styles.table}
            columnWrapperStyle
        />
    );
}

const lightColor = {
    "FULL_SHADE": "white",
    "PART_SHADE": "#fcf8d7",
    "SUN": "#fff49e",
    "FULL_SUN": "#ffed5c",
}

const styles = StyleSheet.create({
    grid: {
        alignItems: 'center',
    },
    table: {
        flexGrow: 0,
    },
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
});