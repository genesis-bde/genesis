import React, {Component} from 'react';
import {
    Image, StyleSheet,
    View, Text,
    TouchableHighlight,
    Platform
} from 'react-native';
import Layout from '../constants/Layout';
import Modal from "./Modal";


export default class Sponsor extends Component {

    render() {
        const {name, position, description, src = '../assets/images/members/default.jpg'} = this.props.Sponsor;

        return (
            <View>
                <Modal>
                    <Image
                        style={styles.image}
                        source={require(src)}
                        resizeMode="contain"
                    />
                    <Text style={styles.name}>{name}</Text>

                    <Text style={styles.description}>{description}</Text>
                </Modal>

                <TouchableHighlight onPress={this.toggleModal}>
                    <Image
                        style={styles.imagePreview}
                        source={require('../assets/images/members/default.jpg')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    imagePreview: {
        width: (Layout.window.width) / 4,
        height: (Layout.window.width) / 4
    },
    image: {
        marginTop: 10,
        flex: 0.5,
        height: undefined,
        width: undefined
    },
    name: {
        marginTop: -20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    description: {
        marginTop: 50
    }
});