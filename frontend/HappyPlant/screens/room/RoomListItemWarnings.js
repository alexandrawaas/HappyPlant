import { View, Text, StyleSheet } from "react-native";
import WarnIcon from "../other/WarnIcon";
import AssignmentIcon from "../other/AssignmentIcon";

export default function RoomListItemWarnings({ numberOfWarnings, numberOfAssignments }) {
    return (
        <View style={styles.hintContainer}>
            {numberOfWarnings !== 0
                ? <Text style={styles.hint}>
                    <WarnIcon />
                    &nbsp;{numberOfWarnings}
                </Text>
                : null}
            {numberOfAssignments !== 0
                ? <Text style={styles.hint}>
                    <AssignmentIcon />
                    &nbsp;{numberOfAssignments}
                </Text>
                : null}
        </View>
    );
}

const styles = StyleSheet.create({
    hintContainer: {
        display: "flex",
    },
    hint: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#233d0c"
    },
});
