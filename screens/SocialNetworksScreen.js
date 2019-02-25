import React from 'react';
import { View, StyleSheet } from 'react-native';
import Layout from '../constants/Layout';
import SocialNetworks from '../data/SocialNetworks';
import SocialNetwork from '../components/SocialNetwork'
import Colors from "../constants/Colors";


export default class SocialNetworksScreen extends React.Component {

    render() {
        const size = (Layout.window.height ) / 5;

        return (
            <View style={styles.container}>
                { SocialNetworks.map(network => (
                    <SocialNetwork
                        name={network.iconName}
                        url={network.url}
                        style={styles.icon}
                        size={size}
                    />
                ))}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
    },
    icon: {
        color: Colors.second
    }
});