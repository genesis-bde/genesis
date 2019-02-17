import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import Layout from '../constants/Layout';
import SocialNetworks from '../constants/Layout';
import SocialNetwork from '../components/SocialNetwork'


export default class SocialNetworksScreen extends React.Component {

    render() {
        const size = (Layout.window.height ) / 5;

        return (
            <View style={styles.container}>
                { SocialNetworks.map(network => (
                    <SocialNetwork name={network.iconName} url={network.url} size={size} />
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
    }
});