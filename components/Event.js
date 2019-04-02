import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import API from '../constants/API';


export default class Event extends React.Component {

    render() {
        const {startsAt,endsAt,location, title, media} = this.props.eventInfo;

        return (
            <View style={styles.member}>
                <ImageBackground source={{uri: API.media+media}} style={styles.upperPart}>
                    <Text style={styles.title}>{ title.toUpperCase() }</Text>
                </ImageBackground>
                <View style={styles.lowerPart}>
                    <Text style={styles.location}>
                        <MaterialIcons name="location-on" size={12} color="#c6c6c6" />
                        { location }
                    </Text>
                    <Text style={styles.time}>
                        <MaterialIcons name="access-time" size={12} color="#c6c6c6"/>
                        { endsAt ? startsAt+' - '+endsAt: startsAt }
                    </Text>
                </View>
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
        color:'white',
        fontSize: 18,
    },
    lowerPart: {
        paddingHorizontal: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
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
})
