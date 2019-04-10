import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import Event from '../components/Event';
import API from '../constants/API';
import moment from 'moment';

export default class EventsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: 'n',
            todayIndex: undefined,
            events: [],
            isLoading: false,
            start: 0,
        };
    }

    componentWillMount() {
        this.setState({
            isLoading: true,
        });
        this.getEvents()
    }

    componentDidMount() {
        this.clock = setInterval(() => {
            if (!this.state.isLoading) {
                this.scroller.scrollTo({x: 0, y: this.state.start});
                clearInterval(this.clock);
            }
        }, 1000);
    }

    getEvents() {
        this.setState({
            isLoading: true,
        });
        axios.get(API.endpoints.events)
            .then(res => {
                const events = res.data.reduce((events, event) => {
                    event.startsAt = moment(event.startsAt).format("HH:mm");
                    event.endsAt = event.endsAt ? moment(event.endsAt).format("HH:mm") : null;

                    const [hours, minutes] = event.startsAt.split(':');
                    const date = moment(event.date).hours(+hours).minutes(+minutes).valueOf();
                    if (!events[date]) {
                        events[date] = [];
                    }
                    events[date].push(event);
                    return events;
                }, {});

                // Edit: to add it in the array format instead
                let todayIndex, start = 0;
                const eventArrays = Object.keys(events).map((date, index) => {

                    if (typeof todayIndex === 'undefined') {
                        if (moment().diff(new Date(+date), 'days') <= 0) {
                            todayIndex = index;
                        } else {
                            start += 30 + 135 * events[date].length;
                        }

                    }
                    return {
                        date: new Date(+date),
                        events: events[date]
                    };
                });
                todayIndex = typeof todayIndex === 'undefined' ? eventArrays.length - 1 : todayIndex;
                this.setState({
                    start,
                    todayIndex,
                    events: eventArrays,
                    isLoading: false,
                });

            })
            .catch(e => {
                console.log(e);
                this.setState({
                    error: e.message,
                    isLoading: false,
                })
            });
    }

    _onLayout = (e) => {
        this.setState({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
        })
    };

    _events = () => this.state.events.map((dayEvents, index, events) => {
        const viewStyle = {
            ...styles.dateEvents,
            ...{height: index + 1 === events.length ? this.state.height : undefined}
        };

        return (
            <View style={viewStyle}>
                <View style={styles.dateHeader}>
                    <Text style={styles.dayName}>{dayNames[dayEvents.date.getDay()]}</Text>
                    <Text style={styles.dayNumber}>{dayEvents.date.getDate()}</Text>
                    <Text style={styles.dayMonth}>{monthNames[dayEvents.date.getMonth()]}</Text>
                </View>
                <View style={styles.event}>
                    {dayEvents.events.map(event => (
                        <Event eventInfo={event}/>
                    ))}
                </View>
            </View>
        )
    })

    render() {
        return (
            <ScrollView
                style={styles.container}
                onLayout={this._onLayout}
                contentOffset={{x: 0, y: this.state.start}}
                ref={(scroller) => {
                    this.scroller = scroller
                }}
            >
                {this._events()}
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
        flexDirection: 'column',
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

    },
    dayNumber: {
        lineHeight: 87,
        fontSize: 90,
        fontWeight: 'bold',
        color: "#c6c6c6",
        textAlign: 'center',

    },
    dayMonth: {
        marginTop: -25,
        fontSize: 25,
        textAlign: 'center',
        color: "#c6c6c6",

    }
});
