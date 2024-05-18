const isInInterval = (min, max, value) => {
    return value <= max && value >= min;
}

export const isIntervalInInterval = (intervalLowerBound, intervalUpperBound, valueLowerBound, valueUpperBound) => {
    return isInInterval(intervalLowerBound, intervalUpperBound, valueLowerBound)
        || isInInterval(intervalLowerBound, intervalUpperBound, valueUpperBound)
}