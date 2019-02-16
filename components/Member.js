import React, {Component} from 'react';
import {
    Image, StyleSheet, ScrollView, Modal,
    View, Text, TouchableWithoutFeedback,
    TouchableHighlight, TouchableOpacity,
    Platform
} from 'react-native';
import Layout from '../constants/Layout';


export default class TabBarIcon extends Component {

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
    };

    render() {
        const {name, position, description, src = '../assets/images/members/default.jpg'} = this.props.memberInfo;

        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <TouchableOpacity style={styles.hidden} onPressOut={this.toggleModal} >
                        <View style={styles.modal}>
                            <TouchableWithoutFeedback style={{flex: 1}}>
                                <View style={{flex: 1}}>
                                    <Image
                                        style={styles.image}
                                        source={require(src)}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.name}>{ name }</Text>
                                    <Text style={styles.position}>{ position.toUpperCase() }</Text>

                                    <Text style={styles.description}>{ description }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableOpacity>
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
    hidden: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.6)'
    },
    modal: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
        height: '80%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        marginTop: 10,
        flex:0.5,
        height: undefined,
        width: undefined
    },
    name: {
        marginTop: -20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    position: {
        marginTop: 0,
        textAlign: 'center',
        fontWeight: '300',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
    },
    description: {
        marginTop: 50
    }
});