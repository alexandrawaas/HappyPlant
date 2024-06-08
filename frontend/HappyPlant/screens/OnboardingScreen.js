import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet, View, Text} from 'react-native';
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyPage = ({title = '', subtitle = '', image = null}) => (
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

    return (
        <Onboarding
            onSkip={handleOnboardingFinish}
            onDone={handleOnboardingFinish}
            pages={[
                {
                    backgroundColor: '#BDEEB5',
                    image: <MyPage
                        image={require('../assets/Onboarding/Onboarding1.png')}
                        title={'Willkommen bei' + '\n' + 'HappyPlant'}
                        subtitle='Pflanzenpflege, smart und einfach.'
                    />,
                },
                {
                    backgroundColor: '#BDEEB5',
                    image: <MyPage
                        image={require('../assets/Onboarding/Onboarding2.png')}
                        title='To-dos verwalten'
                        subtitle={'Behalte den Überblick über Gießen,' + '\n' + 'Schnitt, Umtopen und Düngen.'}
                    />,
                },
                {
                    backgroundColor: '#BDEEB5',
                    image: <MyPage
                        image={require('../assets/Onboarding/Onboarding3.png')}
                        title='Optimaler Standort'
                        subtitle={'Finde den perfekten Platz' + '\n' + 'für deine Pflanzen.'}
                    />,
                },
                {
                    backgroundColor: '#BDEEB5',
                    image: <MyPage
                        image={require('../assets/Onboarding/Onboarding4.png')}
                        title='Pflanzenwissen'
                        subtitle={'Entdecke verschiedene Arten' + '\n' + 'und erweitere dein Know-how.'}
                    />,
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