import React from 'react';
import {Image, Button, Platform} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';

import Colors from "../constants/Colors";

import TabBarIcon from '../components/TabBarIcon';
import HeaderBack from '../components/HeaderBack';

import HomeScreen from '../screens/HomeScreen';
import TeamScreen from "../screens/TeamScreen";
import SponsorsScreen from "../screens/SponsorsScreen";
import EventsScreen from "../screens/EventsScreen";
import SocialNetworksScreen from "../screens/SocialNetworksScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

const names = {
    Home: 'Accueil',
    Team: 'Notre liste',
    Events: 'Evènements',
    Sponsors: 'Sponsor',
    SocialNetworks: 'Réseaux Sociaux'
};


const UsTab = createMaterialTopTabNavigator({
    Team: {
        screen: TeamScreen,
        navigationOptions: {
            title: "l'équipe"
        }
    },
    Projects: {
        screen: ProjectsScreen,
        navigationOptions: {
            title: 'nos projets'
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Colors.tabIconSelected,
        inactiveTintColor: Colors.tabIconSelected,
        indicatorStyle: {
            backgroundColor: Colors.second
        },
        style: {
            backgroundColor: Colors.main
        }
    },
});


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
        screen: UsTab,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name="users"
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
                    name="handshake-o"
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
                    name="share-alt"
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
            tintColor: Colors.tintColor
        },

    },
    navigationOptions: ({navigation}) => {
        const {routeName} = navigation.state.routes[navigation.state.index];
        return {
            headerStyle: Platform.OS === 'ios' ?{
                backgroundColor: Colors.main,
                borderBottomColor: Colors.main,
                shadowColor : Colors.main,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,

            }: {
                backgroundColor: Colors.main,
                borderBottomColor: Colors.main,
                elevation: 0
            },
            headerTintColor: Colors.tintColor,
            headerTitle: names[routeName],
            headerBackImage: routeName === 'Home' ? null :
                <HeaderBack/>,
            headerRight: <Image
                source={ require('../assets/images/logo.png')}
                style={{width: 30, height: 30, marginRight:'20px'}}
            />
        };
    }
});

export default createStackNavigator({
    TabNavigator: TabNavigator
})
