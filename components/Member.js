import React, {Component} from 'react';
import {
    Image, StyleSheet,
    View, Text,
    TouchableHighlight,
    Platform
} from 'react-native';
import Layout from '../constants/Layout';
import Modal from "./Modal";


export default class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        const {
            name, position, description, images = {
                preview: require('../assets/images/members/preview/default.jpg'),
                complete: require('../assets/images/members/complete/default.jpg')
            }
        } = this.props.memberInfo;

        return (
            <View>
                <Modal modalVisible={this.state.modalVisible} onToggle={this.toggleModal}>
                    <Image
                        style={styles.image}
                        source={images.complete}
                    />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.position}>{position.toUpperCase()}</Text>

                    <Text style={styles.description}>{description}</Text>
                </Modal>

                <TouchableHighlight onPress={this.toggleModal}>
                    <Image
                        style={styles.imagePreview}
                        source={images.preview}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    imagePreview: {
        width: (Layout.window.width) / 3,
        height: (Layout.window.width) / 3
    },
    image: {
        marginTop: -85,
        width: (Layout.window.width) / 2,
        height: (Layout.window.width) / 2,
        borderRadius: (Layout.window.width),
        borderWidth: 4,
        borderColor: '#fff',
        overflow: 'hidden'
    },
    name: {
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    position: {
        marginTop: 0,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '300',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
        fontSize: 18,
    },
    description: {
        marginTop: 50
    }
});