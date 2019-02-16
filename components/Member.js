import React, {Component} from 'react';
import {Image} from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


export default class TabBarIcon extends Component {

    render() {
        const {name, src, description, position} = this.props;
        return (
            <Image
                style={styles.image}
                source={require('../assets/images/members/default.png')}
            />
        );
    };
}



const styles = StyleSheet({
    image: {
        width: (Layout.window.width) / 4,
        height: (Layout.window.width) / 4
    }
});