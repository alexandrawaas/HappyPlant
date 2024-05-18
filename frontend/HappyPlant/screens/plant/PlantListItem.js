import RoundPictureNameComponent from "../species/RoundPictureNameComponent";
import {View, StyleSheet, TouchableOpacity} from "react-native";

export default function ({plant, onPress}) {
    return <>
        <TouchableOpacity onPress={() => onPress(plant.id)}>
            <View style={styles.listItemContainer}>
                <RoundPictureNameComponent header={plant.name} subHeader={plant.species.name} isListItem />
            </View>
        </TouchableOpacity>
    </>;
}

const styles = StyleSheet.create({
    listItemContainer: {
        marginHorizontal: 30,
        marginVertical: 10,
    }
});