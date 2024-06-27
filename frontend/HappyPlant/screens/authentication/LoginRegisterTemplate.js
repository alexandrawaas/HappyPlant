import { View, Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';

export default function LoginRegisterTemplate({ title, children, onSubmit, submitButtonText, imageSource }) {
    const {height} = useWindowDimensions()
    const imgDimension = 0.3 * height
    return (
        <View style={commonStyles.container}>
            <View style={getBackgroundElipsisStyle(height)} />
            <Image source={imageSource} style={{...styles.img, height: imgDimension, width: imgDimension }} />
            <Text style={styles.header}>{title}</Text>
            <View style={[styles.formContainer, commonStyles.shadow]} >
                {children}
            </View>
            <TouchableOpacity style={[styles.registerButton, commonStyles.shadow]} onPress={onSubmit}>
                <Text style={styles.registerButtonText}>{submitButtonText}</Text>
            </TouchableOpacity>
        </View>
    );

};


const styles = StyleSheet.create({
    backgroundElipsis: {
        backgroundColor: '#BEF5B5',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    img: {
        marginTop: 20,
        borderRadius: 60,
    },
    header: {
        marginTop: 10,
        marginBottom: 30,
        fontSize: 30,
    },

    formContainer: {
        backgroundColor: 'white',
        paddingVertical: 7,
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputLabel: {
        marginTop: 5,
        marginBottom: -3,
        margin: 3,
        color: '#233D0C',
        zIndex: 1,
        textAlign: 'left',
        width: '100%',
        marginLeft: 80,
    },
    input: {
        width: '80%',
        marginTop: 5,
        marginBottom: 10,

        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#FDFBEF',
        elevation: 3,
    },

    subButton: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    subButtonText: {
        marginTop: 10,
        color: '#9D9B9B',
        fontSize: 16,
        textDecorationLine: 'underline',
    },    

    registerButton: {
        backgroundColor: '#BEF5B5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    registerButtonText: {
        color: 'black',
        fontSize: 18,
    },
});

const getBackgroundElipsisStyle = (height) => {
    const elementHeight = 0.65 * height
    return { ...StyleSheet.absoluteFillObject, ...styles.backgroundElipsis, height: elementHeight }
}


