import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default class EventsScreen extends React.Component {
    static navigationOptions = {
        title: 'Evenements',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Bienvenue sur la page des evenements</Text>
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
