import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class Articles extends React.Component {
    render() {
        const {
            title,
            description,
            date,
            source,
            media,
            location,
        } = this.props.articleInfo;
        const { noteStyle, featuredTitleStyle } = styles;
        const time = moment(date || moment.now()).fromNow();
        const defaultImg =
            'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

        return (
            
                <Card
                    featuredTitle={title}
                    featuredTitleStyle={featuredTitleStyle}
                    image={{
                        uri: media || defaultImg
                    }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        {description || 'Read More..'}
                    </Text>
                    <Divider style={{ backgroundColor: '#dfe6e9' }} />
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Text style={noteStyle}>{location}</Text>
                        <Text style={noteStyle}>{time}</Text>
                    </View>
                </Card>
            
        );
    }
}

const styles = {
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3
    }
};