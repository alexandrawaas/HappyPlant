import React, { useState, useEffect, useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { isIntervalInInterval } from '../../utils/helpers';

export default function Draggable2({ dropZoneMeasures, color, onSuccesfulDrop }) {
    const pan = useRef(new Animated.ValueXY()).current;
    const draggable = useRef(null)

    const check = (px, width, py, height) => {
        return dropZoneMeasures.filter(m => 
            isIntervalInInterval(m.minX, m.maxX, px, px + width)
                && isIntervalInInterval(m.minY, m.maxY, py, py + height)
        )
    }

    const getMatchingDropZones = () => {
        return new Promise((resolve, reject) => {
            draggable.current.measure((fx, fy, width, height, px, py) => {
                resolve(check(px, width, py, height))
            })
        })
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [null, { dx: pan.x, dy: pan.y }],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
            getMatchingDropZones().then(zones => {
                if (zones.length !== 0) {
                    onSuccesfulDrop(zones, color)
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            })
        }
    });

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[{
                transform: pan.getTranslateTransform()
            }]}
            ref={draggable}
        >
            <View style={{ ...styles.circle, backgroundColor: color }} />
        </Animated.View>
    );
};

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});

