import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AssignmentsScreen from "../AssignmentsScreen";
import RoomsScreen from "../RoomsScreen";
import MyPlantsScreen from "../MyPlantsScreen";
import SpeciesScreen from "../SpeciesScreen";
import SettingsScreen from "../SettingsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 50,
                    height: 70,
                    ...styles.shadow,
                } }
            }>
            <Tab.Screen
                name="Aufgaben"
                component={AssignmentsScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={focused ? require('../../assets/TabNav Icons/checkliste.png') : require('../../assets/TabNav Icons/checklistegrey.png')}
                                style={{width: 35, height: 35}}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Räume" component={RoomsScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        source={focused ? require('../../assets/TabNav Icons/room.png') : require('../../assets/TabNav Icons/roomgrey.png')}
                                        style={{width: 35, height: 35}}
                                    />
                                </View>
                            ),
                        }}
            />
            <Tab.Screen name="Meine Pflanzen" component={MyPlantsScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        source={focused ? require('../../assets/TabNav Icons/plant.png') : require('../../assets/TabNav Icons/plantgrey.png')}
                                        style={{width: 35, height: 35}}
                                    />
                                </View>
                            ),
                        }}
            />
            <Tab.Screen name="Lexikon" component={SpeciesScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        source={focused ? require('../../assets/TabNav Icons/book.png') : require('../../assets/TabNav Icons/bookgrey.png')}
                                        style={{width: 35, height: 35}}
                                    />
                                </View>
                            ),
                        }}
            />
            <Tab.Screen name="Einstellungen" component={SettingsScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        source={focused ? require('../../assets/TabNav Icons/settings.png') : require('../../assets/TabNav Icons/settingsgrey.png')}
                                        style={{width: 35, height: 35}}
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

