import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Accordion from 'react-native-collapsible/Accordion';
import API from "../constants/API";

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProjects: [],
        };
    }

    _renderSectionTitle = project => {
        return;
    };

    _renderHeader = (project, index) => {
        return (
            <View style={styles.header}>
                <View><Text style={styles.headerText}>{project.title.toUpperCase()}</Text></View>
                <View>
                    {this.state.activeProjects[0] === index ?
                        <Entypo name="chevron-thin-up" size={16} color="#c6c6c6" /> :
                        <Entypo name="chevron-thin-down" size={16} color="#c6c6c6" />
                    }
                </View>
            </View>
        );
    };

    _renderContent = project => {
     
        return (
            <View style={styles.content}>
                <Text>{project.content}</Text>
            </View>
        );
    };

    _updateSections = activeProjects => {
        this.setState({ activeProjects });
    };


    render() {
        const section = this.props.sectionInfo;
        return (
            <View styles={styles.section}>
                <ImageBackground source={section.image} style={styles.sectionHeader}>
                    <Text style={styles.title}>{section.title.toUpperCase()}</Text>
                </ImageBackground>
                <Accordion
                    sections={section.projects}
                    activeSections={this.state.activeProjects}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                    containerStyle={styles.accordion}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    accordion: {
        paddingBottom: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,

    },
    headerText: {
        textTransform: 'uppercase',
        fontWeight: '100',
        fontSize: 16,
    },
    title: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },
    sectionHeader: {
        width: '100%',
        height: 50,
    },
    image: {
        resizeMode:'center',
        width: window.width,
        height: 180,
    },
});