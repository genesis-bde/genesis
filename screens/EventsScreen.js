import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {Font} from 'expo';

export default class EventsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error :'n',
            events: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        this.setState({
            isLoading: true,
        });
        axios.get(`https://api.sheety.co/d5f09aea-be51-44b3-9e41-a9a4d7d2f2ed`)
            .then(res => {
                const events = res.data.reduce((events, event) => {
                    const date = Date.parse(event.date);
                    if (!events[date]) {
                        events[date] = [];
                    }
                    events[date].push(event);
                    return events;
                }, {});

                // Edit: to add it in the array format instead
                const eventArrays = Object.keys(events).map((date) => {
                    return {
                        date: new Date(+date),
                        events: events[date]
                    };
                });

                this.setState({
                    events: eventArrays,
                    isLoading: false,
                });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    error:e.message,
                    isLoading: false,
                })
            });
    }

    render() {
        const events = this.state.events;
        return (
            <ScrollView style={styles.container}>
                { events.map((dayEvents,index) => (
                    <View style={styles.dateEvents}>
                        <View style={styles.dateHeader}>
                            <Text style={styles.dayName}>{dayNames[dayEvents.date.getDay()]}</Text>
                            <Text style={styles.dayNumber}>{dayEvents.date.getDate()}</Text>
                            <Text style={styles.dayMonth}>{monthNames[dayEvents.date.getMonth()]}</Text>
                        </View>
                        <View style={styles.event}>
                            {dayEvents.events.map(event => (
                                <Text>sss</Text>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        );
    }
}
const monthNames = [
    "Janvier", "Février", "Mars",
    "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre",
    "Octobre", "Novembre", "Decembre"
];

const dayNames = [
    "Dimanche", "Lundi", "Mardi",
    "Mercredi", "Jeudi", "Vendredi",
    "Samedi"
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    dateEvents: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 15,
    },
    event: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItem: 'center',
    },
    dateHeader: {
        flex: 4,
    },
    dayName: {
        lineHeight: 30,
        fontSize: 15,
        color: "#444",
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'dinot',
    },
    dayNumber: {
        lineHeight: 87,
        fontSize: 90,
        fontWeight: 'bold',
        color: "#c6c6c6",
        textAlign: 'center',
        fontFamily: 'dinot',
    },
    dayMonth: {
        marginTop: -25,
        fontSize: 25,
        textAlign: 'center',
        color: "#c6c6c6",
        fontFamily: 'dinot',
    }
});
