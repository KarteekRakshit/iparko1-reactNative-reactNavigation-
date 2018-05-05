import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import EntryTabScreen from './screens/EntryTabScreen';
import DrawerMapNavScreen from './screens/DrawerMapNavScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator style={{paddingTop:20}} />
    );
  }
}

const AppStackNavigator = new StackNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  EntryTabScreen: {screen: EntryTabScreen},
  DrawerMapNavScreen: {
    screen: DrawerMapNavScreen,
  navigationOptions:{
    header: null
  } }
},{
  navigationOptions:{
    gestureEnabled:false
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
