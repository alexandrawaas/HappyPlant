import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function HeaderBackground() {
    return (<LinearGradient
        colors={['#bef5b5', '#b0e4a7']}
        style={styles.box}
    />);
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
})