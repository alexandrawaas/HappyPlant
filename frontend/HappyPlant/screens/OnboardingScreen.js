import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet, View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

const MyPage = ({ title = '', subtitle = '', image = null }) => (
    <View style={styles.page}>
        <Image style={styles.img} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);

const MyOnboarding = () => {
    const navigation = useNavigation();

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
                {
                    backgroundColor: '#BDEEB5',
                    image: <Image style={styles.img} source={require('../assets/Onboarding/Onboarding1.png')} />,
                    title: (
                        <Text style={[styles.title, { top: 520, left: 60 }]}>
                            Willkommen bei{'\n'}HappyPlant
                        </Text>
                    ),
                    subtitle: (
                        <Text style={[styles.subtitle, { top: 620, left: 60 }]}>
                            Pflanzenpflege, smart und einfach.
                        </Text>
                    ),
                },
                {
                    backgroundColor: '#BDEEB5',
                    image: <Image style={styles.img} source={require('../assets/Onboarding/Onboarding2.png')} />,
                    title: (
                        <Text style={[styles.title, { top: 520, left: 60 }]}>
                            To-dos verwalten
                        </Text>
                    ),
                    subtitle: (
                        <Text style={[styles.subtitle, { top: 620, left: 60 }]}>
                            Behalte den Überblick über Gießen, {'\n'}Schnitt, Umtopen und Düngen.
                        </Text>
                    ),
                },
                {
                    backgroundColor: '#BDEEB5',
                    image: <Image style={styles.img} source={require('../assets/Onboarding/Onboarding3.png')} />,
                    title: (
                        <Text style={[styles.title, { top: 520, left: 60 }]}>
                            Optimaler Standort
                        </Text>
                    ),
                    subtitle: (
                        <Text style={[styles.subtitle, { top: 620, left: 60 }]}>
                            Finde den perfekten Platz {'\n'}für deine Pflanzen.
                        </Text>
                    ),
                },
                {
                    backgroundColor: '#BDEEB5',
                    image: <Image style={styles.img} source={require('../assets/Onboarding/Onboarding4.png')} />,
                    title: (
                        <Text style={[styles.title, { top: 520, left: 60 }]}>
                            Pflanzenwissen
                        </Text>
                    ),
                    subtitle: (
                        <Text style={[styles.subtitle, { top: 620, left: 60 }]}>
                            Entdecke verschiedene Arten {'\n'}und erweitere dein Know-how.
                        </Text>
                    ),
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 480,
        height: 620,
        left: 30,
        top: -250,
    },
    title: {
        fontSize: 30,
        position: 'absolute',
        top: 140,
        color: '#233D0C',
        left: 90,
    },
    subtitle: {
        fontSize: 20,
        position: 'absolute',
        top: 240,
        color: '#233D0C',
        left: 90,
    },
});

export default MyOnboarding;
