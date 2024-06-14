import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { commonStyles } from "../../utils/styles/CommonStyles";

export default function AddRoomButton({ onClick, displayAsCard, displayOnNewLine }) {
    const button = (
        <TouchableOpacity onPress={onClick} style={[styles.button, commonStyles.shadow]}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );

    return (<>
        {displayAsCard ?
            <View style={styles.buttonContainer}>
                <View style={styles.buttonCard}>
                    {button}
                </View>
            </View> 
        : null}
        {displayOnNewLine ?
            <View style={styles.newLineButtonContainer}>
                {button}
            </View> 
        : null}
    </>);
}

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
        height: 150,
        padding: 10,
    },
    buttonCard: {
        width: "100%",
        height: "100%",
        padding: 15,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        // background: "linear-gradient(180deg, #FFFFFF 0%, #000000 100%)",
        backgroundColor: "#bef5b5",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    newLineButtonContainer: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})