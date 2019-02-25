import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Sponsors from '../data/Sponsors'
import Sponsor from "../components/Sponsor";



export default class SponsorsScreen extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                { Sponsors.map((sponsor) => (
                    <Sponsor sponsorInfo={sponsor} />
                ) )}
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
