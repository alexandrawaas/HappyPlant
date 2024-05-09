import { AssignmentTypeTranslations } from "../../utils/EnumTranslations";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AssignmentTypeIcons } from "../../utils/EnumIcons";
import { LightingTypeTranslations } from "../../utils/EnumTranslations";
import { Tooltip } from "react-native-elements";
import { StyleSheet,View, Text } from "react-native";

export default function NeedLabelWithIcon({assignmentType, value}) {
    return (
        <View style={styles.singleNeedContainer}>
            <Tooltip backgroundColor="#cef2c8" popover={<Text>{AssignmentTypeTranslations[assignmentType]}</Text>}>
                {AssignmentTypeIcons[assignmentType]}
            </Tooltip>
            {assignmentType === "LIGHTING" 
                ? <Text>{LightingTypeTranslations[value]}</Text>
                : <Text>alle {value} Tage</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    singleNeedContainer: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
    },
    icon: {
        paddingRight: 7,
    },
})