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

import Swiper from 'react-native-web-swiper';
import { Video } from 'expo-av';

export default class hutan extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
               
            <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://lh5.googleusercontent.com/p/AF1QipM9q240IYwUFvqEe9wTeCtFgt0WTcgh7jY0Mr8J=w408-h272-k-no'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20003931-c8867d34113e846ca4a96ec31fd1513b.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/161/161100242.jpg'}}/>
               
               </Swiper>
    
               
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Airy Lansot Sarongsong
              </Text>

              <Text style={styles.postDescription}>
              Alamat: Jl. Raya Tomohon, Lansot, Sonder, Kota Tomohon, Sulawesi Utara 95441
              Telepon: 0804 111 2479
              </Text>
              
              <Text style={styles.postenglish}>
              Address: Jl. Raya Tomohon, Lansot, Sonder, Tomohon City, North Sulawesi 95441
              Phone Number: 0804 111 2479
              </Text>
             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('airymaps')}>
             <Image style={styles.userImage}
                  source={{uri: 'https://www.gstatic.com/images/branding/product/1x/maps_round_512dp.png'}}/>
             </TouchableOpacity>
             <Text style={styles.postDescription}>
              Maps
              </Text>
             </View>
             
              </View>
            </ScrollView>
       
         
         
     
    
    );
  }
}



const styles = StyleSheet.create({
 
  headerContent:{
    padding:5,
    alignItems: 'center',
    backgroundColor: "white"
  },
  avatar: {
    width: 360,
    height: 250,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "black",
    marginBottom:10,
  },
  userImage:{
    height: 100,
    width: 100,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:15,
    color:"#FFFFFF",
    fontWeight:'600',
    
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 7.50,
    elevation: 4,

    marginVertical: 9,
    backgroundColor:"white",
    flexBasis: '33%',
    marginHorizontal: 1,
  },
  postContent: {
    flex: 1,
    padding:30,
    paddingTop: 10,
    margin: 5,
    backgroundColor: "white"
  },
  postTitle:{
    fontSize:26,
    fontWeight:'600',
  },
  postenglish:{
    fontSize:16,
    marginTop:10,
    fontWeight: 'bold'
  },
  postDescription:{
    fontSize:16,
    marginTop:10,
  },
  tags:{
    color: '#00BFFF',
    marginTop:10,
  },
  date:{
    color: '#696969',
    marginTop:10,
  },
  
});
  