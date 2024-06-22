import React, { forwardRef, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default DropZone2 = forwardRef(({ style, draggedObject, addMeasures, index, children }, ref) => {
    useEffect(() => {
        ref.current.measure((fx, fy, width, height, px, py) => {
            console.log(fx, fy, width, height, px, py)
            addMeasures({ minX: px, maxX: px + width, minY: py, maxY: py + height }, index)
        })
    }, [ref.current])

    return (
        <View ref={ref} style={style}>
            {children}
        </View>
    );
})
