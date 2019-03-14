import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import Accordion from 'react-native-collapsible/Accordion';

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: [],
        };
    }

    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
                <View></View>

            </View>
        );
    };

    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <View><Text style={styles.headerText}>{section.title}</Text></View>
                <View>
                    {this.state.activeSections === section ?
                        <Entypo name="chevron-thin-up" size={12} color="#c6c6c6"/> :
                        <Entypo name="chevron-thin-down" size={12} color="#c6c6c6"/>
                    }
                </View>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({activeSections});
    };


    render() {
        const section = this.props.sectionInfo;
        return (
            <View>
                <Text>{section.title}</Text>
                <Accordion
                    sections={section.projects}
                    activeSections={this.state.activeSections}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});