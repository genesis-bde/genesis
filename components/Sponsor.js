import React, {Component} from 'react';
import {
    Image, StyleSheet,
    View, Text,
    TouchableHighlight,
} from 'react-native';
import Layout from '../constants/Layout';
import Modal from "./Modal";


export default class Sponsor extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    toggleModal = () =>{
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        const {name, description, src} = this.props.sponsorInfo;

        return (
            <View>
                <Modal modalVisible={this.state.modalVisible} onToggle={this.toggleModal}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/sponsors/nike.png')}
                        resizeMode="contain"
                    />  
                    <Text style={styles.name}>{name}</Text>

                    <Text style={styles.description}>{description}</Text>
                </Modal>

                <TouchableHighlight onPress={this.toggleModal}>
                    <Image
                        style={styles.imagePreview}
                        source={require('../assets/images/sponsors/nike.png')}
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