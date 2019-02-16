import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';


export default class SocialNetworksScreen extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require('../assets/images/social/facebook.png')}
                />
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require('../assets/images/social/snapchat.png')}
                />
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require('../assets/images/social/instagram.png')}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    }
});