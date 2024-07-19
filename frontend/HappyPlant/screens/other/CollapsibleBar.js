import { Text, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import Collapsible from "react-native-collapsible";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
import { useState } from "react";

export default function CollapsibleBar({ title, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handlePress = () => {
        Keyboard.dismiss();
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <TouchableOpacity onPress={handlePress}>
                <LinearGradient colors={['#fdfbef', '#fef1ed']} style={styles.toggleContainer}>
                    <Text style={styles.containerTitle}>{title}</Text>
                    <Entypo name={isCollapsed ? 'chevron-down' : 'chevron-up'} color={'#98948f'} size={20} />
                </LinearGradient>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                {children}
            </Collapsible>
        </>
    );
}

const styles = StyleSheet.create({
    toggleContainer: {
        borderRadius: 15,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerTitle: {
        fontSize: 16,
    }
});
