import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import Accordion from 'react-native-collapsible/Accordion';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProjects: [],
        };
    }

    _renderSectionTitle = project => {
        return (
            <View style={styles.content}>
                <View>{project.content}</View>

            </View>
        );
    };

    _renderHeader = project => {
        return (
            <View style={styles.header}>
                <View><Text style={styles.headerText}>{project.title}</Text></View>
                <View>
                    {this.state.activeProjects === project ?
                        <Entypo name="chevron-thin-up" size={12} color="#c6c6c6"/> :
                        <Entypo name="chevron-thin-down" size={12} color="#c6c6c6"/>
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
        this.setState({activeProjects});
    };


    render() {
        const section = this.props.sectionInfo;
        return (
            <View styles={styles.section}>
                <Text style={styles.title}>{section.title.toUpperCase()}</Text>
                <Accordion
                    sections={section.projects}
                    activeSections={this.state.activeProjects}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    section: {
        marginVertical: 20,
        marginHorizontal: 3
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title : {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});