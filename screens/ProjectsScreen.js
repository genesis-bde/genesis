import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Sections from '../data/Projects';
import Project from "../components/Project";

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
        backgroundColor: '#fff',
    }
});
