import { Text, TextInput, StyleSheet } from 'react-native';
import { commonStyles } from '../../utils/styles/CommonStyles';


export default function LoginRegiserInputField({ label, value, onChange, keyboardType, password }) {
    return (<>
        <Text style={styles.inputLabel}> {label} </Text>
        <TextInput
            placeholder=""
            value={value}
            onChangeText={onChange}
            secureTextEntry={password}
            keyboardType={keyboardType}
            autoCorrect={false}
            autoCapitalize="none"
            style={[commonStyles.shadow, styles.input]}
        />
    </>)
}

const styles = StyleSheet.create({
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
})