import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { OpenMapDirections } from 'react-native-navigation-directions';


export default class welumapsmaps extends React.Component {
  /**Maps*/ 
  _callShowDirections = () => {
    const startPoint = {
    
    } 

    const endPoint = {
      longitude: 124.813377,
      latitude: 1.323821
    }

		const transportPlan = 'd';

    OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
      console.log(res)
    });
  }
  render(){
    return (
        <View style={{height: 500}}>
            <MapView style={{flex: 1,}}
            initialRegion={{
            latitude: 1.323821, 
            longitude: 124.813377,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
        <Marker
        coordinate={{
            latitude:1.323821 ,
            longitude:124.813377 
        }}
        title={"We'lu Cafe & Resto Tomohon"}
        />
      </MapView>
      <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => { this._callShowDirections() }}>
             <Image style={styles.userImage}
                  source={{uri: 'https://cdn.pixabay.com/photo/2012/04/24/16/40/arrow-40369_960_720.png'}}/>
             </TouchableOpacity>
             <Text style={styles.postDescription}>
              Petunjuk Arah
              </Text>
             </View>
             
       </View> 


         
         
     
    
    );
  }
}



const styles = StyleSheet.create({
 
  headerContent:{
    padding:10,
    alignItems: 'center',
    backgroundColor: "white"
  },
 
  userImage:{
    height: 70,
    width: 70,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  }
});
  