import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

class HomeScreen extends Component {
  static navigationOptions =({navigation}) =>{
    return{
        headerTitle:'iParko',
        drawerLabel: 'Search Parking',
        headerLeft:(
            <View style={{padding:10}}>
                <Ionicons name="md-menu" size={24} onPress={()=> navigation.navigate('DrawerOpen')} />
            </View>
        )
    }
}
  render() {
    return (
      //<View style={styles.container}>
        <MapView style={styles.map}
          region={{
            latitude:13.082680,
            longitude:80.270718,
            latitudeDelta:0.1,
            longitudeDelta:0.1
          }}>
          <MapView.Marker 
          coordinate={{
            latitude:13.082680,
            longitude:80.270718
          }}
            title={'Chennai'}
            description={'My Home'} 
        />
        </MapView>
      //</View>
    );
  }
}

export default HomeScreen;

/*const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    map:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
      }
}); */

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});