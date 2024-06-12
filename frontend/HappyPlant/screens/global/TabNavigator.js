import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RoomStackNavigator from './RoomStackNavigator';
import PlantStackNavigator from './PlantStackNavigator';
import AssignmentStackNavigator from './AssignmentStackNavigator';
import SpeciesStackNavigator from './SpeciesStackNavigator';
import SettingStackNavigator from './SettingsStackNavigator';
import headerStyleOptions from './HeaderStyle';
import GlobalLayout from "./GlobalLayout";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const getOptionsForIcon = (activeIcon, greyIcon) => {
        // cannot make it more generic, because the string passed to require() must be final -.-
        return {
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ position: 'absolute' }}>
                        <View style={[styles.selectedCircle, focused ? styles.focused : styles.unfocused]} />
                        <Image
                            source={focused ? activeIcon : greyIcon}
                            style={styles.tabIcon}
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
                headerShown: false,
            }
            }>
            <Tab.Screen
                name="assignments"
                children={AssignmentStackNavigator}
                options={getOptionsForIcon(require('../../assets/TabNav Icons/checkliste.png'), require('../../assets/TabNav Icons/checklistegrey.png'))}
            />
            <Tab.Screen
                name="rooms"
                component={RoomStackNavigator}
                options={getOptionsForIcon(require('../../assets/TabNav Icons/room.png'), require('../../assets/TabNav Icons/roomgrey.png'))}
            />
            <Tab.Screen
                name="plants"
                children={PlantStackNavigator}
                options={getOptionsForIcon(require('../../assets/TabNav Icons/plant.png'), require('../../assets/TabNav Icons/plantgrey.png'))}
            />
            <Tab.Screen
                name="species"
                children={SpeciesStackNavigator}
                options={getOptionsForIcon(require('../../assets/TabNav Icons/book.png'), require('../../assets/TabNav Icons/bookgrey.png'))}
            />
            <Tab.Screen
                name="settings"
                children={SettingStackNavigator}
                options={getOptionsForIcon(require('../../assets/TabNav Icons/settings.png'), require('../../assets/TabNav Icons/settingsgrey.png'))}
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
    },
    tabIcon: {
        width: 35, 
        height: 35, 
        bottom: Platform.OS === 'ios' ? -14 : 0
    },
    selectedCircle: {
        position: 'absolute', 
        bottom: Platform.OS === 'ios' ? -25 : -17, 
        left: Platform.OS === 'ios' ? -20 : -22,
        width: 80, 
        height: 80, 
        borderRadius: 35, 
    },
    focused: {
        backgroundColor: '#FFFFFF'
    },
    unfocused: {
        backgroundColor: 'transparent'
    }
    
})

export default TabNavigator;

