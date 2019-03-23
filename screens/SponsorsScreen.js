import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Sponsor from "../components/Sponsor";
import axios from "axios";
import API from '../constants/API';


export default class SponsorsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error :'n',
            sponsors: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.getSponsors();
    }

    getSponsors() {
        this.setState({
            isLoading: true,
        });
        axios.get(API.endpoints.sponsors)
            .then(res => {
                const sponsors = res.data;

                this.setState({
                    sponsors: sponsors || [],
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

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.state.sponsors.map((sponsor, index) => {
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
