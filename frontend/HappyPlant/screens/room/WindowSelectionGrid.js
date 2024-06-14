import { FlatList, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";

const GLOBAL_PADDING = 2 * 20;

export default function WindowSelectionGrid({ room, callback }) {
    const [ data, setData ] = useState([]);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if(room) {
            const newData = Array.from({ length: room.y }, (_, rowIndex) =>
                Array.from({ length: room.x }, (_, colIndex) => ({
                    key: `${rowIndex}-${colIndex}`,
                    item: room.grid.find(p => p.x === colIndex && p.y === rowIndex),
                }))
            ).flat();
            setData(newData)
        }        
    }, [room])

    let cellSize = (width - GLOBAL_PADDING) / room?.x;
    if (cellSize * room?.y > 0.4 * height) {
        cellSize = (0.4 * height) / room?.y
    }

    const [selectedPixel, setSelectedPixel] = useState(null);

    const handlePixelPress = (pixel) => {
        pixel.isWindow = !pixel.isWindow;
        setSelectedPixel(pixel);
        callback(data)
    };

    const pixelStyle = (pixel) => {
        return {
            ...(pixel.isWindow ? styles.window : styles.cell),
            backgroundColor: lightColor[pixel.isWindow],
            width: cellSize,
            height: cellSize,
        }
    }

    const renderItem = ({ item }) => {
        return (<>
            <TouchableOpacity
                style={pixelStyle(item.item)}
                onPress={() => handlePixelPress(item.item)}
            >
            </TouchableOpacity>
        </>)
    };

    return (
        <FlatList
            key={room?.id}
            scrollEnabled={false}
            data={data}
            renderItem={renderItem}
            numColumns={room?.x}
            contentContainerStyle={styles.grid}
            style={styles.table}
        />
    );
}

const lightColor = {
    "true": "#71c4d1",
    "false": "white",
}

const styles = StyleSheet.create({
    grid: {
        alignItems: 'center',
        paddingBottom: 15,
    },
    table: {
        flexGrow: 0,
    },
    cell: {
        borderWidth: 0.5,
        borderColor: 'grey',
        backgroundColor: 'white',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    window: {
        borderWidth: 2,
        borderColor: '#71c4d1',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

});
