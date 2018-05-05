import React from 'react';
import { Text, StyleSheet,ImageBackground, Image, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import logo from '../assets/content/logo.png';

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {Username:'',Password:'Password'}
  }
  render() {
    return (
      <View style={{ flex: 1, padding:20,justifyContent:'center'}}>
        <View style={{ flex: 1,alignItems: 'center'}}>
        <ImageBackground style={{width: 150, height: 150,justifyContent: 'center', alignItems: 'center',
                alignItems: 'center',}} source={logo}>
        </ImageBackground>
        <Text style={{fontSize:30, color:'#00838f'}}>Login!</Text>   
        </View>
        <View style={{ flex: 1}}>
        
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#00838f"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}/>
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#00838f"
          autoCapitalize = "none"
          onChangeText = {this.handlePassword}/>
        <TouchableOpacity style = {styles.submitButton} 
        onPress={()=>this.props.navigation.navigate('DrawerMapNavScreen')}>
        <Text style = {styles.submitButtonText}> Login </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding:20,justifyContent:'center'}}>
        <View style={{ flex: 1,alignItems: 'center'}}>
        <ImageBackground style={{width: 150, height: 150,justifyContent: 'center', alignItems: 'center',
                alignItems: 'center',}} source={logo}>
        </ImageBackground>
        <Text style={{fontSize:30, color:'#00838f'}}>Sign Up!</Text>   
        </View>
        <View style={{ flex: 1}}>
        
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#00838f"
          autoCapitalize = "none"
          onChangeText = {this.handleEmail}/>
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#00838f"
          autoCapitalize = "none"
          onChangeText = {this.handlePassword}/>
          <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Phone Number"
          placeholderTextColor = "#00838f"
          autoCapitalize = "none"
          onChangeText = {this.handlePassword}/>
        <TouchableOpacity style = {styles.submitButton} 
        onPress={()=>this.props.navigation.navigate('DrawerMapNavScreen')}>
        <Text style = {styles.submitButtonText}> Register </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TabNavigator(
  {
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Login') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'SignUp') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
    
  }
);


const styles = StyleSheet.create({
  input: {
     margin: 15,
     paddingLeft:15,
     height: 40,
     borderColor: '#00838f',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#00838f',
     padding: 10,
     margin: 15,
     height: 40,
     alignItems: 'center'
  },
  submitButtonText:{
     color: 'white'
  }
})