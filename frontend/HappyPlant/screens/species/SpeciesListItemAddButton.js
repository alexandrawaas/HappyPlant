import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';

export default function SpeciesListItemAddButton({ title, onPress, style }) {
    return (
        <LinearGradient colors={['#fdfbef', '#f6ffed']} style={[styles.button, commonStyles.shadow, style]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
