import React, { forwardRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";

export default DropZone2 = forwardRef(({ addMeasures, index, children }, ref) => {
    useEffect(() => {
        ref?.current.measure((fx, fy, width, height, px, py) => {
            addMeasures({ minX: px, maxX: px + width, minY: py, maxY: py + height }, index)
        })
    }, [ref?.current])

    return (
        <View ref={ref} style={styles.test}>
            {children}
        </View>
    );
})

// WARN: nicht löschen, sonst geht das ganze drag and drop nicht mehr x.x
// aus inem grund werden dann die dimensions von ref.current nicht mehr getrackt
const styles = StyleSheet.create({
    test: {
        backgroundColor: 'transparent'
    },
});