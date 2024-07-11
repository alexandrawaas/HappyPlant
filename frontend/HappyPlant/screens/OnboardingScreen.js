import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';


const getImagePosition = (windowWidth, windowHeight) => ({
    width: 1.2 * windowWidth,
    height: 0.8 * windowHeight,
    left: 0.07 * windowWidth,
    top: -0.32 * windowHeight,
})

const getTitlePosition = (windowWidth, windowHeight) => ({
    top: 0.66 * windowHeight,
})

const getSubtitlePosition = (windowWidth, windowHeight, doubleMargin = false) => ({
    top: 0.66 * windowHeight + (doubleMargin ? 100 : 77)
})

const MyOnboarding = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    const createPage = (title, subtitle, imgSrc, isFirst = false) => {
        return {
            backgroundColor: '#BDEEB5',
            image: <Image style={getImagePosition(width, height)} source={imgSrc} />,
            title: <Text style={[styles.text, styles.title, getTitlePosition(width, height)]} numberOfLines={2}>{title}</Text>,
            subtitle: <Text style={[styles.text, styles.subtitle, getSubtitlePosition(width, height, isFirst)]} numberOfLines={3}>{subtitle}</Text>,
        }
    }

    const handleOnboardingFinish = async () => {
        await AsyncStorage.setItem('hasOnboarded', 'true');
        navigation.navigate('Registrieren');
    }

    // these warnings are due to library bugs (https://github.com/jfilter/react-native-onboarding-swiper/issues #148, #149), so we suppress them.
    LogBox.ignoreLogs([
        'Warning: SymbolButton: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
        'Warning: TextButton: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
        'Warning: Page: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
    ])

    return (
        <Onboarding
            onSkip={handleOnboardingFinish}
            onDone={handleOnboardingFinish}
            pages={[
                createPage('Willkommen bei HappyPlant!', 'Pflanzepflege, smart und einfach.', require('../assets/Onboarding/Onboarding1.png'), true),
                createPage('To-dos verwalten', 'Behalte den Überblick über Gießen, Schneiden, Umtopfen und Düngen.', require('../assets/Onboarding/Onboarding2.png')),
                createPage('Optimaler Standort', 'Finde den perfekten Platz für deine Pflanzen.', require('../assets/Onboarding/Onboarding3.png')),
                createPage('Pflanzenwissen', 'Entdecke verschiedene Arten und erweitere dein Know-how.', require('../assets/Onboarding/Onboarding4.png')),
            ]}
        />
    );
};

const styles = StyleSheet.create({
    text: {
        width: '80%',
        position: 'absolute',
        color: '#233D0C',
    },
    title: {
        fontSize: 30,
    },
    subtitle: {
        fontSize: 20,
    },
});

export default MyOnboarding;
