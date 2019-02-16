import React from 'react';
import {Platform, TouchableHighlight} from 'react-native';
import { NavigationActions } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon'

export default class HeaderBack extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={NavigationActions.navigate('Home')}>
                <TabBarIcon
                    focused={false}
                    name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
                />
            </TouchableHighlight>
        );
    }
}