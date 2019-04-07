import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Member from '../components/Member';
import Members from "../data/Members";


export default class TeamScreen extends React.Component {

    render() {

        return (
            <ScrollView style={styles.container}>
                {Members.map(group => (
                    <View style={{flex: 1, paddingVertical: 20}}>
                        <Text style={styles.pole}>{group.name}</Text>
                        <View style={styles.memberViewer}>
                            {group.members.map(member => (
                                <Member memberInfo={member}/>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    pole: {
        textAlign: 'center',
        fontFamily: 'leixo',
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    memberViewer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});
