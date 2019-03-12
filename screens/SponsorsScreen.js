import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Sponsors from '../data/Sponsors'
import Sponsor from "../components/Sponsor";


export default class SponsorsScreen extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {Sponsors.map((sponsor, index) => {
                        const style = (index + 1) === 1 || (index + 1) % 3 ?
                            {alignItems: 'center'} :
                            {alignItems: 'center', flexBasis: '100%'};

                        return <Sponsor style={style} sponsorInfo={sponsor}/>
                    })}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
