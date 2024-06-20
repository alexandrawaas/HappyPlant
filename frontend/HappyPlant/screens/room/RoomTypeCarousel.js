import {View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import {  useState } from "react";
import { FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';
import Carousel from "react-native-reanimated-carousel";
import { RoomTypeIcons, RoomTypeNames } from "../../utils/EnumIcons";
import {LinearGradient} from "expo-linear-gradient";

const roomTypes = Object.keys(RoomTypeIcons);

export default function RoomTypeCarousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const width = Dimensions.get('window').width

    const handleSnap = (index) =>{
        setCurrentIndex(index);
        props.callback(roomTypes[index]);
    }

    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={styles.circle.height +20 } 
                data={roomTypes}
                renderItem={({ item, index }) => (
                    <View style={styles.iconContainer}>
                        <LinearGradient style={styles.circle} colors={["#fdfbef", "#fef1ed"]}>
                            {RoomTypeIcons[item]}
                            <Text>{RoomTypeNames[roomTypes[index]]}</Text>
                        </LinearGradient>
                    </View>
                )}
                loop
                pagingEnabled={false}
                snapEnabled
                mode='parallax'
                modeConfig={{
                    parallaxScrollingOffset: 330,
                    parallaxScrollingScale: 1,
                    parallaxAdjacentItemScale: 0.6,
                    snapDirection: 'left',
                }}
                onSnapToItem={(index) => handleSnap(index)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    circle: {
        width: 130,
        height: 130,
        borderRadius: 35,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});
