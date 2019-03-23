import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Permissions, Notifications } from 'expo';
import { StackNavigator } from 'react-navigation';

import { MonoText } from '../components/StyledText';
import { getNews } from '../data/News';
import Article from '../components/Articles';
import axios from 'axios';

const PUSH_ENDPOINT = 'https://www.genesis-bde.fr/api/phone';
import API from '../constants/API';

async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log("------------------------------------------");
  console.log(token);
  console.log("------------------------------------------");
  // POST the token to your backend server from where you can retrieve it to send push notifications.
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    }),
  });
}

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          "id": 1,
          "title": "Bonjour",
          "description": "Salut tout le monde",
          "location": "NDL",
          "date": "2021-01-01T00:00:00+01:00",
          "startsAt": "1970-01-01T14:00:00+01:00",
          "endsAt": null,
          "media": "events\/4cce4338f9d008e8f118566b472675fd78a47243.jpeg",
          "uploadedFile": null
        }
      ], refreshing: true
    };

    this.fetchNews = this.fetchNews.bind(this);
  }

  fetchNews() {
    this.setState({
      refreshing: true,
    });
    axios.get(API.endpoints.sponsors)
      .then(res => {
        const articles = res.data;

        this.setState({
          articles,
          refreshing: false,
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({
          refreshing: false,
        })
      });
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  componentDidMount() {
    registerForPushNotificationsAsync()
    this.listener = Expo.Notifications.addListener(this.listen)
    this.fetchNews();
  }

  componentWillUnmount() {
    this.listener && Expo.Notifications.removeListener(this.listen)
  }

  listen = ({ origin, data }) => {
    console.log("cool data", origin, data);
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.container}>
            {/* <FlatList
              data={this.state.articles}
              renderItem={({ item }) => <Article article={item} />}
              keyExtractor={item => item.url}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh.bind(this)}
            /> */}
            {/* {articles.map((article, index) => {
              return <Articles articleInfo={article} />
            })} */}
          </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 15,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    marginTop: 0,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
