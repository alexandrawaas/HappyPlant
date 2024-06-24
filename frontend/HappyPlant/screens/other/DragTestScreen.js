import React, { useRef, useState, useCallback } from "react";
import { StyleSheet, View, Text, FlatList, useWindowDimensions } from "react-native";
import Draggable2 from "./Draggable2";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import DropZone2 from "./DropZone2";
import CollapsibleBar from "./CollapsibleBar"
import { useEffect } from "react";
import { fetchURL } from "../../utils/ApiService";
import { pixelData, room } from "./pixelDataDump";
import RoomPixel from '../room/detail-view/RoomPixel'
import { findMeasureInArray } from "../../utils/helpers";

const DROP_ZONES = [
    'skyblue',
    'lavender',
    'beige',
    'lightgreen',
    'grey',
]

const GLOBAL_PADDING = 2 * 20;

export default function DragTestScreen({ navigation, room }) {
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
        }
    }, [room])

    useEffect(() => {
        if(data) {
            setDropZones(data.map(i => React.createRef(null)))
        }
    }, [data])

    const addMeasures = (m, i) => {
        measures[i] = m
        setMeasures([...measures])
    }

    const processDrop = useCallback((receivedMeasures, item) => {
        const pixelIndex = findMeasureInArray(measures, receivedMeasures)
        console.log(`${item} in ${data[pixelIndex].key}`)
        console.log(`PATCH rooms/${room.id}/plants/{plantId}, body: {coords: {x:${data[pixelIndex].item.x}, y:${data[pixelIndex].item.y}}}`)
        console.log(`GET inventory`)
    }, [room, measures])

    const { width, height } = useWindowDimensions();

    const renderItem = useCallback(({ item, index }) => {
        let cellSize = (width - GLOBAL_PADDING) / room.x;
        if (cellSize * room.y > 0.4 * height) {
            cellSize = (0.4 * height) / room.y
        }
        return (
            <DropZone2 ref={dropZones[index]} addMeasures={addMeasures} key={index} index={index}>
                <RoomPixel item={item} cellSize={cellSize} navigation={navigation} />
            </DropZone2>
        )
    }, [dropZones, addMeasures, navigation, room])

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

            <View style={styles.row}>
                {DROP_ZONES.map((c, i) =>
                    <Draggable2 dropZoneMeasures={measures} color={c} key={i} onSuccesfulDrop={processDrop} />
                )}
            </View>
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
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: "row",
    }
});