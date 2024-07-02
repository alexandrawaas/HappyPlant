import React from 'react';
import { StyleSheet, View, Image, Platform, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RoomStackNavigator from './RoomStackNavigator';
import PlantStackNavigator from './PlantStackNavigator';
import AssignmentStackNavigator from './AssignmentStackNavigator';
import SpeciesStackNavigator from './SpeciesStackNavigator';
import SettingStackNavigator from './SettingsStackNavigator';
import { commonStyles } from '../../../utils/styles/CommonStyles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const { width, height } = useWindowDimensions();
    const isLargeScreen = width >= 376;

    const getOptionsForIcon = (activeIcon, greyIcon) => {
        const circleSize = isLargeScreen ? width * 0.19 : width * 0.18;
        const iconSize = isLargeScreen ? width * 0.075 : width * 0.07;
        const bottomOffset = isLargeScreen ? height * 0.055 : height * 0.03;
        const marginBottom = isLargeScreen ? height * 0.03 : height * 0.01;

        return {
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {focused && (
                        <View
                            style={[
                                styles.selectedCircle,
                                {
                                    width: circleSize,
                                    height: circleSize,
                                    borderRadius: circleSize / 2,
                                    bottom: -bottomOffset,
                                    backgroundColor: '#FFFFFF',
                                },
                            ]}
                        />
                    )}
                    <Image
                        source={focused ? activeIcon : greyIcon}
                        style={[styles.tabIcon, { width: iconSize, height: iconSize, marginBottom: -marginBottom }]}
                    />
                </View>
            ),
        };
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                lazy: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Platform.OS === 'ios' ? height * 0.03 : height * 0.02,
                    left: width * 0.05,
                    right: width * 0.05,
                    backgroundColor: '#FFFFFF',
                    borderRadius: width * 0.1,
                    height: isLargeScreen ? height * 0.08 : height * 0.09,
                    ...commonStyles.shadow,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="assignments"
                children={AssignmentStackNavigator}
                options={getOptionsForIcon(require('../../../assets/TabNav Icons/checkliste.png'), require('../../../assets/TabNav Icons/checklistegrey.png'))}
            />
            <Tab.Screen
                name="rooms"
                component={RoomStackNavigator}
                options={getOptionsForIcon(require('../../../assets/TabNav Icons/room.png'), require('../../../assets/TabNav Icons/roomgrey.png'))}
            />
            <Tab.Screen
                name="plants"
                children={PlantStackNavigator}
                options={getOptionsForIcon(require('../../../assets/TabNav Icons/plant.png'), require('../../../assets/TabNav Icons/plantgrey.png'))}
            />
            <Tab.Screen
                name="species"
                children={SpeciesStackNavigator}
                options={getOptionsForIcon(require('../../../assets/TabNav Icons/book.png'), require('../../../assets/TabNav Icons/bookgrey.png'))}
            />
            <Tab.Screen
                name="settings"
                children={SettingStackNavigator}
                options={getOptionsForIcon(require('../../../assets/TabNav Icons/settings.png'), require('../../../assets/TabNav Icons/settingsgrey.png'))}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabIcon: {
        marginBottom: 0,
    },
    selectedCircle: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
    },
    focused: {
        backgroundColor: '#FFFFFF',
    },
    unfocused: {
        backgroundColor: 'transparent',
    },
});

export default TabNavigator;
