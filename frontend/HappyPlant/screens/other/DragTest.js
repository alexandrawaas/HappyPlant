import React, { Component, useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Draggable2 from "./Draggable2";
import VerticalPlaceholder from "../../utils/styles/VerticalPlaceholder";
import DropZone2 from "./DropZone2";

const DROP_ZONES = [
    'skyblue',
    'lavender',
    'beige',
    'lightgreen',
    'grey',]

export default function DragTest() {
    const dropZones = DROP_ZONES.map(i => useRef(null));
    const [measures, setMeasures] = useState(DROP_ZONES.map(i => ({ minX: 0, maxX: 0, minY: 0, maxY: 0 })))

    useEffect(() => {
        dropZones.forEach((r, i) => {
            r.current?.measure((fx, fy, width, height, px, py) => {
                console.log(`${px} <= x <= ${px + width}`)
                console.log(`${py} <= y <= ${py + height}`)
                setMeasures(measures.map((m, idx) => {
                    if(idx === i) {
                        console.log(i, idx, m)
                        return { minX: px, maxX: px + width, minY: py, maxY: py + height }
                    }
                    else {
                        return m
                    }
                }))
            })
        })
    }, [...dropZones.map(x => x.current)])

    useEffect(() => {
        console.log(measures)
    }, [measures])

    useEffect(() => {
        console.log(dropZones)
    }, [dropZones])


    return (
        <View style={styles.mainContainer}>
            <View style={styles.grid}>
                {DROP_ZONES.map((c, i) =>
                    <DropZone2 style={{ backgroundColor: c }} ref={dropZones[i]} key={i} />
                )}
            </View>

            <VerticalPlaceholder size={100} />

            <View style={styles.row}>
                {DROP_ZONES.map((c, i) =>
                    <Draggable2 dropZoneMeasures={measures} color={c} key={i} />
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
        display: 'flex',
        flexDirection: 'row',
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