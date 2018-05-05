import React, { Component } from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';

class SignOut extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text> Are you sure you want to signOut ? </Text>
        <Button title="SignOut" onPress={()=>this.props.screenProps.navigation.navigate('WelcomeScreen')} />
      </View>
    );
  }
}

export default SignOut;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});