import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Member from '../components/Member';
import Members from "../constants/Members";


export default class TeamScreen extends React.Component {
    constructor(props) {
        super(props);
        this.members = Members;
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.memberViewer}>
                    { this.members.map(member => (
                        <Member memberInfo={member}/>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    memberViewer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
