import React from 'react';
import {Image, Button, Platform} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TeamScreen from "../screens/TeamScreen";
import SponsorsScreen from "../screens/SponsorsScreen";
import EventsScreen from "../screens/EventsScreen";
import SocialNetworksScreen from "../screens/SocialNetworksScreen";


const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name="home"
        />
    ),
};

const TeamStack = createStackNavigator({
    Links: TeamScreen,
});

TeamStack.navigationOptions = {
    tabBarLabel: 'Team',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name="group"
        />
    ),
};

const SponsorsStack = createStackNavigator({
    Settings: SponsorsScreen,
});

SponsorsStack.navigationOptions = {
    tabBarLabel: 'Sponsors',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name="dollar"
        />
    ),
};

const EventsStack = createStackNavigator({
    Settings: EventsScreen,
});

EventsStack.navigationOptions = {
    tabBarLabel: 'Sponsors',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name="calendar-o"
        />
    ),
};

const SocialNetworksStack = createStackNavigator({
    Settings: SocialNetworksScreen,
});

SocialNetworksStack.navigationOptions = {
    tabBarLabel: 'Réseau Sociaux',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name="feed"
        />
    ),
};

const TabNavigator = createMaterialTopTabNavigator({
    HomeStack,
    TeamStack,
    EventsStack,
    SponsorsStack,
    SocialNetworksStack
}, {
    navigationOptions: ({navigation}) => {
        const {routeName} = navigation.state.routes[navigation.state.index];
        return {
            headerTitle: routeName,
            headerLeft: routeName === 'Home' ? null :
                <TabBarIcon
                    focused={false}
                    name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
                />
        };
    }
});

export default createStackNavigator({
    TabNavigator: TabNavigator
})
