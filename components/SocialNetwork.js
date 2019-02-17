import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

export default class SocialNetwork extends React.Component {

    startApp = (url) => {

    }

    render() {
        return (
            <TouchableOpacity onPressOut={this.startApp(this.props.url)}>
                <Icon.FontAwesome
                    style={this.props.style}
                    size={this.props.size}
                    name={this.props.name}
                />
            </TouchableOpacity>
        );
    }
}