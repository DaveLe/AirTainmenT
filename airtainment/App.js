import React from 'react';
import { YellowBox, StyleSheet, Text, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import firebase from 'firebase';
import WelcomeScreen from './screens/WelcomeScreen';
import MovieScreen from './screens/MovieScreen';
import MusicScreen from './screens/MusicScreen';
import TVScreen from './screens/TVScreen';


YellowBox.ignoreWarnings(['Warning: ReactNative.createElement'])

const MainNavigator = createStackNavigator(
  {
    welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    main: {
      screen: createBottomTabNavigator({
        music: { screen: MusicScreen },
        movie: { screen: MovieScreen },
        tv: { screen: TVScreen }
      })
    }
  }
  // {
  //   navigationOptions: {
  //     tabBarVisible: false
  //   }
  // }
);

export default class App extends React.Component {
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCfgGAENd9pnKaij4hDPKp1ttgswzK4Y1g',
      authDomain: 'airtainment-dba73.firebaseapp.com',
      databaseURL: 'https://airtainment-dba73.firebaseio.com',
      projectId: 'airtainment-dba73',
      storageBucket: 'airtainment-dba73.appspot.com',
      messagingSenderId: '471409054224'
    };
    firebase.initializeApp(config);
    console.disableYellowBox = true
  }
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
