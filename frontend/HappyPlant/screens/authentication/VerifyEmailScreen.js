import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../utils/CommonStyles';

const VerifyEmailScreen = ({ navigation }) => {
    return (
        <View style={commonStyles.container}>
            <Text>Verify Email</Text>
            <Text>Wir haben eine Verifizierungs-E-Mail an Ihre Adresse gesendet. Bitte überprüfen Sie Ihren Posteingang.</Text>
            <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={commonStyles.buttonText}>Zum Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VerifyEmailScreen;