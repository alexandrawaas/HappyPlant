import { AssignmentTypeTranslations } from "../../utils/EnumTranslations";
import { AssignmentTypeIcons } from "../../utils/EnumIcons";
import { LightingTypeTranslations } from "../../utils/EnumTranslations";
import { Tooltip } from "react-native-elements";
import { StyleSheet,View, Text } from "react-native";

export default function NeedLabelWithIcon({assignmentType, value}) {
    return (
        <View style={styles.singleNeedContainer}>
            <Tooltip backgroundColor="#cef2c8" skipAndroidStatusBar={true} popover={<Text>{AssignmentTypeTranslations[assignmentType]}</Text>}>
                {AssignmentTypeIcons[assignmentType]}
            </Tooltip>
            {assignmentType === "LIGHTING" 
                ? <Text>{LightingTypeTranslations[value]}</Text>
                : (value !== "" ? <Text>alle {value} Tage</Text> : <Text> - </Text>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    singleNeedContainer: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
        marginVertical: 2,
    },
})