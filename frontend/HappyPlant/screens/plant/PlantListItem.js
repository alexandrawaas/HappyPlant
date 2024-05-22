import RoundPictureNameComponent from "../species/RoundPictureNameComponent";
import {View, StyleSheet, TouchableOpacity} from "react-native";

export default function ({plant, onPress}) {
    return <>
        <TouchableOpacity onPress={() => onPress(plant.id)} style={styles.listItemContainer}>
            <View >
                <RoundPictureNameComponent header={plant.name} subHeader={plant.species.name} isListItem />
            </View>
        </TouchableOpacity>
    </>;
}

const styles = StyleSheet.create({
    listItemContainer: {
        marginVertical: 10,
        width: "50%",
    }
});