import React from 'react';
import {TouchableOpacity, Linking,  Alert} from 'react-native';
import {Icon} from 'expo';

export default class SocialNetwork extends React.Component {

    startApp = (url) => () => {
        Linking.canOpenURL(url)
            .then(supported => {
                if (!supported) {
                    Alert.alert(
                        'RIP frère',
                        'J\'arrive pas ouvrir l\'application'
                    )
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch(err =>
                console.error('An error occurred', err)
            );
    };

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