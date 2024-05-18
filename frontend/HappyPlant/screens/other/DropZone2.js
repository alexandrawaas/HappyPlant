import React, { forwardRef, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

export default DropZone2 = forwardRef(({ style, draggedObject }, ref) => {
    // const zone = 

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