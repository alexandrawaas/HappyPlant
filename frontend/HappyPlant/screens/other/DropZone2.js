import React, { forwardRef, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default DropZone2 = forwardRef(({ style, draggedObject, addMeasures, index }, ref) => {
    useEffect(() => {
        ref.current.measure((fx, fy, width, height, px, py) => {
            addMeasures({ minX: px, maxX: px + width, minY: py, maxY: py + height }, index)
        })
    }, [ref.current])

    return (
        <View ref={ref} style={[style, styles.dropZone]}>
            <Text style={styles.text}>Droppable</Text>
        </View>
    );
})

const styles = StyleSheet.create({
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