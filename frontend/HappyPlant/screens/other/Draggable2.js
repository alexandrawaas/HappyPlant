import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { getOverlapValue } from '../../utils/helpers';

export default function Draggable2({ dropZoneMeasures, color, onSuccesfulDrop }) {
    const pan = useRef(new Animated.ValueXY()).current;
    const draggable = useRef(null)

    const check = (px, width, py, height) => {
        console.log(px, px + width, py, py + height)
        let res = dropZoneMeasures
            .map(m => {
                const horizontalOverlap = getOverlapValue(m.minX, m.maxX, px, px + width)
                const verticalOverlap = getOverlapValue(m.minY, m.maxY, py, py + height)
                console.log(horizontalOverlap, verticalOverlap)
                return [m, (horizontalOverlap * verticalOverlap)]
            })
            .reduce((max, curr) => curr[1] > max[1] ? curr : max)
        res = res[1] > 0 ? [res[0]] : []
        return res
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
                if (zones.length === 1) {
                    onSuccesfulDrop(zones[0], color)
                } else {
                    console.log(zones, dropZoneMeasures)
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            })
        }
    })

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

let CIRCLE_RADIUS = 12;
let styles = StyleSheet.create({
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});

