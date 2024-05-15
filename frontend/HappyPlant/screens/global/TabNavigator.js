import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AssignmentsScreen from "../AssignmentsScreen";
import RoomsScreen from "../room/RoomsScreen";
import MyPlantsScreen from "../MyPlantsScreen";
import SpeciesScreen from "../species/SpeciesScreen";
import SettingsScreen from "../SettingsScreen";
import GlobalLayout from "./GlobalLayout";
import HeaderBackground from "./HeaderBackground";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const getOptionsForIcon = (icon) => {
        const normalIcon = `../../assets/TabNav Icons/${icon}.png`
        const greyIcon = `../../assets/TabNav Icons/${icon}grey.png`
        console.log('foo')
        return {
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ position: 'absolute' }}>
                        <View style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? -25 : -17, left: Platform.OS === 'ios' ? -20 : -22, width: 80, height: 80, borderRadius: 35, backgroundColor: focused ? '#FFFFFF' : 'transparent' }} />
                        <Image
                            source={focused ? require('../../assets/TabNav Icons/checkliste.png') : require('../../assets/TabNav Icons/checklistegrey.png')}
                            style={{ width: 35, height: 35, bottom: Platform.OS === 'ios' ? -14 : 0 }}
                        />
                    </View>
                </View>
            ),
        }
    }

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Platform.OS === 'ios' ? 30 : 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 50,
                    height: Platform.OS === 'ios' ? 80 : 70,
                    ...styles.shadow,
                },
                headerTintColor: '#233d0c',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerBackground: () => (<HeaderBackground />)
            }
            }>
            <Tab.Screen
                name="Aufgaben"
                children={(props) => <GlobalLayout component={AssignmentsScreen} {...props} />}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ position: 'absolute' }}>
                                <View style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? -25 : -17, left: Platform.OS === 'ios' ? -20 : -22, width: 80, height: 80, borderRadius: 35, backgroundColor: focused ? '#FFFFFF' : 'transparent' }} />
                                <Image
                                    source={focused ? require('../../assets/TabNav Icons/checkliste.png') : require('../../assets/TabNav Icons/checklistegrey.png')}
                                    style={{ width: 35, height: 35, bottom: Platform.OS === 'ios' ? -14 : 0 }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Räume"
                children={(props) => <GlobalLayout component={RoomsScreen} {...props} />}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ position: 'absolute' }} />
                            <View style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? -25 : -17, left: Platform.OS === 'ios' ? -20 : -22, width: 80, height: 80, borderRadius: 35, backgroundColor: focused ? '#FFFFFF' : 'transparent' }} />
                            <Image
                                source={focused ? require('../../assets/TabNav Icons/room.png') : require('../../assets/TabNav Icons/roomgrey.png')}
                                style={{ width: 35, height: 35, bottom: Platform.OS === 'ios' ? -14 : 0 }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Meine Pflanzen"
                children={(props) => <GlobalLayout component={MyPlantsScreen} {...props} />}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ position: 'absolute' }} />
                            <View style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? -25 : -17, left: Platform.OS === 'ios' ? -20 : -22, width: 80, height: 80, borderRadius: 35, backgroundColor: focused ? '#FFFFFF' : 'transparent' }} />
                            <Image
                                source={focused ? require('../../assets/TabNav Icons/plant.png') : require('../../assets/TabNav Icons/plantgrey.png')}
                                style={{ width: 35, height: 35, bottom: Platform.OS === 'ios' ? -14 : 0 }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Lexikon"
                children={(props) => <GlobalLayout component={SpeciesScreen} {...props} />}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ position: 'absolute' }} />
                            <View style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? -25 : -17, left: -22, width: 80, height: 80, borderRadius: 35, backgroundColor: focused ? '#FFFFFF' : 'transparent' }} />
                            <Image
                                source={focused ? require('../../assets/TabNav Icons/book.png') : require('../../assets/TabNav Icons/bookgrey.png')}
                                style={{ width: 35, height: 35, bottom: Platform.OS === 'ios' ? -14 : 0 }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Einstellungen"
                children={(props) => <GlobalLayout component={SettingsScreen} {...props} />}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ position: 'absolute' }} />
                            <View style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? -25 : -17, left: Platform.OS === 'ios' ? -20 : -22, width: 75, height: 75, borderRadius: 35, backgroundColor: focused ? '#FFFFFF' : 'transparent' }} />
                            <Image
                                source={focused ? require('../../assets/TabNav Icons/settings.png') : require('../../assets/TabNav Icons/settingsgrey.png')}
                                style={{ width: 35, height: 35, bottom: Platform.OS === 'ios' ? -14 : 0 }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    }
})

export default TabNavigator;

