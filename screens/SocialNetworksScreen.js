import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default class SocialNetworksScreen extends React.Component {
    static navigationOptions = {
        title: 'Réseaux Sociaux',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Bienvenue sur la page des réseaux sociaux</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
