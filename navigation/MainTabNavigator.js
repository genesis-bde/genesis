import React from 'react';
import {Image, Button, Platform} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TeamScreen from "../screens/TeamScreen";
import SponsorsScreen from "../screens/SponsorsScreen";
import EventsScreen from "../screens/EventsScreen";
import SocialNetworksScreen from "../screens/SocialNetworksScreen";
import Colors from "../constants/Colors";

const names = {
    Home: 'Accueil',
    Team: 'l\'Equipe',
    Events: 'Evènements',
    Sponsors: 'Sponsor',
    SocialNetworks: 'Réseaux Sociaux'
};

const TabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name="home"
                />
            )
        }
    },
    Team: {
        screen: TeamScreen,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name="group"
                />
            )
        }
    },
    Events: {
        screen: EventsScreen,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name="calendar-o"
                />
            )
        }
    },
    Sponsors: {
        screen: SponsorsScreen,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name="dollar"
                />
            )
        }
    },
    SocialNetworks: {
        screen: SocialNetworksScreen,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name="feed"
                />
            )
        }
    }
}, {
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: Colors.tabIconDefault,
        indicatorStyle: {
            backgroundColor: Colors.second
        },
        style: {
            backgroundColor: Colors.main
        }
    },
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.main,
            color: Colors.tintColor
        }
    },
    navigationOptions: ({navigation}) => {
        const {routeName} = navigation.state.routes[navigation.state.index];
        return {
            headerStyle: {
                backgroundColor: Colors.main,
            },
            headerTitle: names[routeName],
            headerLeft: routeName === 'Home' ? null :
                <TabBarIcon
                    focused={false}
                    name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
                />,
            headerRight: <Image
                source={require('../assets/images/logo.png')}
                style={{width: 30, height: 30}}
            />
        };
    }
});

export default createStackNavigator({
    TabNavigator: TabNavigator
})
