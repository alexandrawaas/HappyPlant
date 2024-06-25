import React, { useState, useCallback } from "react";
import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import DropZone2 from "../../other/DropZone2";
import { useEffect } from "react";
import RoomPixel from './RoomPixel'
import { findMeasureInArray, calculateCellSize } from "../../../utils/windowMeasureUtils";
import Inventory from "./Inventory";

export default function RoomDragAndDrop({ navigation, room }) {
    const { width, height } = useWindowDimensions();
    const [data, setData] = useState([])
    const [dropZones, setDropZones] = useState([])
    const [measures, setMeasures] = useState([])

    useEffect(() => {
        if (room) {
            const newData = Array.from({ length: room.y }, (_, rowIndex) =>
                Array.from({ length: room.x }, (_, colIndex) => ({
                    key: `${rowIndex}-${colIndex}`,
                    item: room.grid.find(p => p.x == colIndex && p.y == rowIndex)
                }))
            ).flat();
            setData(newData)
            setDropZones(newData.map(i => React.createRef(null)))
        }
    }, [room])

    const addMeasures = (m, i) => {
        measures[i] = m
        setMeasures([...measures])
    }

    const processDrop = useCallback((receivedMeasures, item) => {
        const pixelIndex = findMeasureInArray(measures, receivedMeasures)
        console.log(`${item.name} in ${data[pixelIndex].key}`)
        console.log(`PATCH rooms/${room.id}/plants/{plantId}, body: {coords: {x:${data[pixelIndex].item.x}, y:${data[pixelIndex].item.y}}}`)
        console.log(`GET inventory`)
    }, [room, measures])


    const renderItem = useCallback(({ item, index }) => {
        return (
            <DropZone2 ref={dropZones[index]} addMeasures={addMeasures} key={index} index={index}>
                <RoomPixel item={item} cellSize={calculateCellSize(width, height, room)} navigation={navigation} />
            </DropZone2>
        )
    }, [dropZones, addMeasures, navigation, width, height, room])

    return (
        <View>
            <FlatList
                key={room.id}
                scrollEnabled={false}
                data={data}
                renderItem={renderItem}
                numColumns={room.x}
                contentContainerStyle={styles.grid}
                style={styles.table}
            />

            <Inventory measures={measures} processDrop={processDrop} />
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        alignItems: 'center',
        paddingBottom: 15,
    },
    table: {
        flexGrow: 0,
    }
});