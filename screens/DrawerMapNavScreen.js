import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import PartnerWithUs from './PartnerWithUs';
import AboutUs from './AboutUs';
import SignOut from './SignOut';

//import HomeScreenTabNavigator from './HomeScreenTabNavigator';

export default class DrawerMapNavScreen extends Component{
    render(){
        return(
            <AppDrawerNavigator screenProps={{navigation:this.props.navigation}}/>
        )
    }
}
const HomeScreenBuffer = new StackNavigator({
    HomeScreen:{ screen:HomeScreen}
})
const PartnerWithUsBuffer = new StackNavigator({
    PartnerWithUs:{ screen:PartnerWithUs}
})

const AboutUsBuffer = new StackNavigator({
    AboutUs:{ screen:AboutUs}
})

const SignOutBuffer = new StackNavigator({
    SignOut:{ screen:SignOut}
})


const AppDrawerNavigator = new DrawerNavigator({
    HomeScreen: {screen: HomeScreenBuffer},
    PartnerWithUs:{screen:PartnerWithUsBuffer},    
    AboutUs:{screen:AboutUsBuffer},
    SignOut:{
        screen:SignOutBuffer,
        navigationOptions:{
        header: null
      }}
})

//export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});