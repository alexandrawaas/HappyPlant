import React, { useState, useCallback } from "react";
import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import DropZone2 from "../../other/DropZone2";
import { useEffect } from "react";
import RoomPixel from './RoomPixel'
import { findMeasureInArray, calculateCellSize } from "../../../utils/windowMeasureUtils";
import Inventory from "./Inventory";
import { fetchURL } from "../../../utils/ApiService";

export default function RoomDragAndDrop({ navigation, room, onRoomUpdate, onInventoryAdd, onDrag, clickable }) {
    const { width, height } = useWindowDimensions();
    const [data, setData] = useState([])
    const [dropZones, setDropZones] = useState([])
    const [measures, setMeasures] = useState([])
    const [inventory, setInventory] = useState([]);
    const [notifySnap, setNotifySnap] = useState(false)

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
        fetchURL(`/inventory`, 'GET', null, navigation, setInventory);
    }, [room])

    const addMeasures = (m, i) => {
        measures[i] = m
        setMeasures([...measures])
    }

    const processDrop = useCallback((receivedMeasures, item) => {
        setNotifySnap(true)
        const pixelIndex = findMeasureInArray(measures, receivedMeasures)
        const coords = {x: data[pixelIndex].item.x, y: data[pixelIndex].item.y}
        fetchURL(`/rooms/${room.id}/plants/${item.id}`, 'PATCH', coords, navigation, onRoomUpdate)
        setNotifySnap(false)
    }, [room, measures])

    const handlePlantDelete = useCallback((plant) => {
        fetchURL(`/rooms/${room.id}/plants/${plant?.id}`, 'DELETE', null, navigation, onRoomUpdate)
    }, [room])


    const renderItem = useCallback(({ item, index }) => {
        return (
            <DropZone2 ref={dropZones[index]} addMeasures={addMeasures} key={index} index={index}>
                <RoomPixel 
                    item={item}  navigation={navigation} 
                    cellSize={calculateCellSize(width, height, room)}
                    onPlantDelete={handlePlantDelete}
                    clickable={clickable}
                />
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

            <Inventory 
                plants={inventory} 
                measures={measures} 
                processDrop={processDrop} 
                onAddPlantPress={onInventoryAdd} 
                onDrag={onDrag} 
                notifySnap={notifySnap}
            />
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
