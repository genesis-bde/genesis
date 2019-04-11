import React, {Component} from 'react';
import {
    Image, StyleSheet,
    View, Text,
    TouchableOpacity,
} from 'react-native';
import Layout from '../constants/Layout';
import Modal from "./Modal";

import API from '../constants/API';


export default class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    _toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        const {name, description, reduction, media} = this.props.sponsorInfo;

        return (
            <View style={this.props.style}>
                <Modal modalVisible={this.state.modalVisible} onToggle={this._toggleModal}>

                    <Image
                        style={styles.image}
                        source={{uri: API.media+media}}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.name}>{name}</Text>

                    <Text style={styles.description}>{description}</Text>

                    { reduction &&
                    <Text style={styles.reduction}>
                        <Text style={{fontWeight:'bold'}}>CODE REDUCTION: </Text>
                        {reduction}
                    </Text>
                    }

                </Modal>

                <TouchableOpacity onPress={this._toggleModal}>
                    <Image
                        style={styles.imagePreview}
                        source={{uri: API.media+media}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    imagePreview: {
        resizeMode: 'contain',
        width: (Layout.window.width) / (2.5),
        height: 150
    },
    image: {
        height: '30%',
        alignSelf: 'stretch',
        marginTop: 10
    },
    name: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    description: {
        marginTop: 50
    },
    reduction: {
        position: 'absolute',
        bottom: 20
    }
});