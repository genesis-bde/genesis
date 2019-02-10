import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default class TeamScreen extends React.Component {
    static navigationOptions = {
        title: 'Notre équipe',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Bienvenue sur la page de l'équipe</Text>
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
