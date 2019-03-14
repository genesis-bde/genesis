import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Projects from '../data/Projects';
import Sections from "../components/Project";

export default class ProjectsScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                { Sections.map(section => (
                    <Project sectionInfo={section}/>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    }
});
