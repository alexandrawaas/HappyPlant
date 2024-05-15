import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

function HeaderBackground() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#bef5b5', '#b0e4a7']}
                style={styles.box}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#f4feee'
    }
})

export default headerStyleOptions = {
    headerTintColor: '#233d0c',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerBackground: () => (<HeaderBackground />)
};