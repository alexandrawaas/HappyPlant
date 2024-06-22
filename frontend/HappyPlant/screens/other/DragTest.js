import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
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

    return (
        <View style={styles.mainContainer}>
            <View style={styles.grid}>
                {DROP_ZONES.map((c, i) =>
                    <DropZone2 style={{ backgroundColor: c }} ref={dropZones[i]} addMeasures={addMeasures} key={i} index={i} />
                )}
            </View>

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
    mainContainer: {
        flex: 1
    },
    grid: {
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
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