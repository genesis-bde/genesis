import React from 'react';
import { View, Text, StyleSheet, Platform, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default class Event extends React.Component {

    render() {
        const {startTime,endTime,location, title} = this.props.eventInfo;

        return (
            <View style={styles.member}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={styles.upperPart}>
                    <Text style={styles.title}>{ title.toUpperCase() }</Text>
                </ImageBackground>
                <View style={styles.lowerPart}>
                    <Text style={styles.location}>
                        <MaterialIcons name="location-on" size={12} color="#c6c6c6" />
                        { location }
                    </Text>
                    <Text style={styles.time}>
                        <MaterialIcons name="access-time" size={12} color="#c6c6c6"/>
                        { endTime ? startTime+' - '+endTime: startTime }
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
        backgroundColor: 'red'
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
