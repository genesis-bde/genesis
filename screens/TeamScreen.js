import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';


export default class TeamScreen extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.memberViewer}>

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
        alignContent:'center'
    },
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
