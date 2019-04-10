import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Platform} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import API from '../constants/API';
import Modal from "./Modal";
import moment from 'moment';


export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    _toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    };

    render() {
        const {startsAt, endsAt, location, title, media, description, date} = this.props.eventInfo;
        const dateFormat = moment(date).format("DD/MM/YYYY");
        return (
            <View style={{...styles.member, ...{opacity: new Date(date) < new Date() ? 0.6: 1}}}>
                <Modal modalVisible={this.state.modalVisible} onToggle={this._toggleModal} style={styles.modal}>
                    <Text style={styles.modalTitle}>{title.toUpperCase()}</Text>
                    <Text style={styles.modalLocation}>{location}</Text>


                    <View style={{marginTop: 40, alignSelf: 'stretch'}}>
                        <Text style={styles.modalSection}> Description : </Text>
                        <Text style={{textAlign: 'center'}}>{description}</Text>
                    </View>

                    <View style={{marginTop: 20, alignSelf: 'stretch'}}>
                        <Text style={styles.modalSection}> Date : </Text>
                        <Text style={styles.modalDate}>
                            {dateFormat} - {endsAt ? startsAt + ' - ' + endsAt : startsAt}
                        </Text>
                    </View>
                </Modal>

                <TouchableOpacity onPress={this._toggleModal}>
                    <ImageBackground source={{uri: API.media + media}} style={styles.upperPart}>
                        <Text style={styles.title}>{title.toUpperCase()}</Text>
                    </ImageBackground>
                    <View style={styles.lowerPart}>
                        <Text style={styles.location}>
                            <MaterialIcons name="location-on" size={12} color="#c6c6c6"/>
                            {location}
                        </Text>
                        <Text style={styles.time}>
                            <MaterialIcons name="access-time" size={12} color="#c6c6c6"/>
                            {endsAt ? startsAt + ' - ' + endsAt : startsAt}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    member: {
        height: 125,
        flex: 1,
        flexDirection: 'column',
        margin: 5,
    },
    upperPart: {
        height: 100,
        width: '100%',
        elevation: 4,
        borderColor: '#c6c6c6',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        textShadowColor: '#00000f',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3
    },
    lowerPart: {
        paddingHorizontal: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 25,
        width: '100%',
        elevation: 4,
        borderColor: '#c6c6c6',
        backgroundColor: '#fff',
    },
    location: {
        fontSize: 12,
        color: "#c6c6c6",
        textAlign: 'left',
    },
    time: {
        fontSize: 12,
        color: "#c6c6c6",
        textAlign: 'right',
    },
    modalTitle: {
        marginVertical: 10,
        color: "#444",
        textAlign: 'center',
        fontFamily: 'leixo',
        fontSize: 20,
    },
    modalSection: {
        textAlign: 'left',
        fontSize: 15,
        color: "#444",
        fontWeight: 'bold',
    },
    modalDate: {
        textAlign: 'center',
        fontSize: 15,
        color: "#444",
    },
    modalLocation: {
        marginTop: -13,
        color: "#444",
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
});
