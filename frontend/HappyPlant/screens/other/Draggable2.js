import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import { getOverlapValue } from '../../utils/windowMeasureUtils';

export default function Draggable2({ dropZoneMeasures, color, onSuccesfulDrop, children, onDrag }) {
    const pan = useRef(new Animated.ValueXY()).current;
    const draggable = useRef(null)

    const check = (px, width, py, height) => {
        let res = dropZoneMeasures
            .map(m => {
                const horizontalOverlap = getOverlapValue(m.minX, m.maxX, px, px + width)
                const verticalOverlap = getOverlapValue(m.minY, m.maxY, py, py + height)
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
            onTouchStart={() => onDrag(true)}
            onTouchEnd={() => onDrag(false)}
        >
            {children}
        </Animated.View>
    );
};

