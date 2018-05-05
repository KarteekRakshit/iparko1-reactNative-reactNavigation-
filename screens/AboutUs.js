import React, { Component } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/content/logo.png';

class AboutUs extends Component {
  static navigationOptions =({navigation}) =>{
    return{
        headerTitle:'About iParko',
        drawerLabel: 'About Us',
        headerLeft:(
            <View style={{padding:10}}>
                <Ionicons name="md-menu" size={24} onPress={()=> navigation.navigate('DrawerOpen')} />
            </View>
        )
    }
}
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 150, height: 150}} source={logo}/>
        <Text> to know more about us, please visit www.iparko.com </Text>
      </View>
    );
  }
}

export default AboutUs;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});