import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight ,Image } from 'react-native';
import logo from '../assets/content/logo.png';
class WelcomeScreen extends Component {
    static navigationOptions= {
        header: null
    };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.BodyDisplay}>
          <Image style={{width: 150, height: 150}}
          source={logo}/>
        <Text style={{fontSize:40}}> iparko </Text>
        </View>
        <View style={styles.EnterButton}>
          <TouchableHighlight style={styles.EnterButton} onPress={()=>this.props.navigation.navigate('EntryTabScreen')} >
            <Text style={styles.ButtonText}>Lets Park </Text>
          </TouchableHighlight>
        </View>
        
      </View>
      
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ffffff'
    },
    EnterButton:{
      flex:1,
      alignItems: 'center',
      backgroundColor:'#00838f',
      padding: 10,
      bottom:0 
    },
    BodyDisplay:{
      flex:10,
      alignItems:'center',
      justifyContent:'center',
    },
    ButtonText:{
      fontSize:30,
      color:'#ffffff'
    }
});