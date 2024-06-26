const isInInterval = (min, max, value) => {
    return value <= max && value >= min;
}

export const isIntervalInInterval = (intervalLowerBound, intervalUpperBound, valueLowerBound, valueUpperBound) => {
    return isInInterval(intervalLowerBound, intervalUpperBound, valueLowerBound)
        || isInInterval(intervalLowerBound, intervalUpperBound, valueUpperBound)
}

export const getOverlapValue = (intervalLowerBound, intervalUpperBound, valueLowerBound, valueUpperBound) => {
    if (isInInterval(intervalLowerBound, intervalUpperBound, valueLowerBound)) {
        return intervalUpperBound - valueLowerBound
    } else if (isInInterval(intervalLowerBound, intervalUpperBound, valueUpperBound)) {
        return valueUpperBound - intervalLowerBound
    } else {
        return 0
    }
}

export const findMeasureInArray = (arr, receivedMeasures) => {
    return arr.findIndex(m => m.maxX === receivedMeasures.maxX 
        && m.minX === receivedMeasures.minX 
        && m.maxY === receivedMeasures.maxY 
        && m.minY === receivedMeasures.minY)
}

export const calculateCellSize = (width, height, room) => {
    const GLOBAL_PADDING = 2 * 20;
    let cellSize = (width - GLOBAL_PADDING) / room.x;
    if (cellSize * room.y > 0.4 * height) {
        cellSize = (0.4 * height) / room.y
    }
    return cellSize
}