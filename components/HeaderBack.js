import React from 'react';
import {Platform, TouchableHighlight} from 'react-native';
import TabBarIcon from '../components/TabBarIcon'

export default class HeaderBack extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                <TabBarIcon
                    focused={false}
                    name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
                    style={{marginLeft: 15}}
                />
            </TouchableHighlight>
        );
    }
}