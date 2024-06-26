import { FlatList, StyleSheet, useWindowDimensions } from "react-native";
import RoomPixel from "./RoomPixel";

const GLOBAL_PADDING = 2 * 20;

export default function SingleRoomGrid({ navigation, room }) {
    const data = Array.from({ length: room.y }, (_, rowIndex) =>
        Array.from({ length: room.x }, (_, colIndex) => ({
            key: `${rowIndex}-${colIndex}`,
            item: room.grid.find(p => p.x == colIndex && p.y == rowIndex)
        }))
    ).flat();
    const { width, height } = useWindowDimensions();

    let cellSize = (width - GLOBAL_PADDING) / room.x;
    if (cellSize * room.y > 0.4 * height) {
        cellSize = (0.4 * height) / room.y
    }
    
    const renderItem = ({ item }) => 
        <RoomPixel item={item} cellSize={cellSize} navigation={navigation}/>
    ;

    return (
        <FlatList
            key={room.id}
            scrollEnabled={false}
            data={data}
            renderItem={renderItem}
            numColumns={room.x}
            contentContainerStyle={styles.grid}
            style={styles.table}
        />
    );
}

const styles = StyleSheet.create({
    grid: {
        alignItems: 'center',
        paddingBottom: 15,
    },
    table: {
        flexGrow: 0,
    }
});
