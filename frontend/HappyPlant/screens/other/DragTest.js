import React, { useRef, useState, useCallback } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Draggable2 from "./Draggable2";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import DropZone2 from "./DropZone2";

const DROP_ZONES = [
    'skyblue',
    'lavender',
    'beige',
    'lightgreen',
    'grey',
]

export default function DragTest() {
    const dropZones = DROP_ZONES.map(i => useRef(null));
    const [measures, setMeasures] = useState([])

    const addMeasures = (m,i) => {
        measures[i] = m
        setMeasures([...measures])
    }

    const processDrop = (receivedMeasures, item) => {
        const pixelIndex = measures.indexOf(receivedMeasures)
        console.log(`${item} in ${DROP_ZONES[pixelIndex]}`)
    }

    const renderItem = ({ item, index }) => {
        return (
            <DropZone2 style={{ backgroundColor: item }} ref={dropZones[index]} addMeasures={addMeasures} key={index} index={index} >
                <Text style={styles.text}>Drop {index}</Text>
            </DropZone2>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                scrollEnabled={false}
                data={DROP_ZONES}
                renderItem={renderItem}
                numColumns={3}
                contentContainerStyle={styles.grid}
                style={styles.table}
            />

            <VerticalPlaceholder size={100} />
         
            <View style={styles.row}>
                {DROP_ZONES.map((c, i) =>
                    <Draggable2 dropZoneMeasures={measures} color={c} key={i} onSuccesfulDrop={processDrop}/>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ballContainer: {
        height: 200
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: "row",
    },
    dropZone: {
        height: 100,
    },
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    }
});