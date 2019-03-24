import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
        <Icon.FontAwesome
            name={this.props.name}
            size={26}
            style={ this.props.style || { marginBottom: -3 }}
            color={Colors.tabIconSelected}
        />
    );
  }
}