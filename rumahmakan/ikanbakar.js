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

export default class ikanbakar extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://lh3.googleusercontent.com/-741UZkE0I9o/WuPosxdQFII/AAAAAAAAABc/pRitPH2oz_8FoVPe06r-Ecm2HPLsUEVGACLQBGAYYCw/2018-04-27.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/12/6d/f9/3f/ikan-bakar-mama.jpg'}}/>
               
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Ikan Bakar Mama Tomohon
              </Text>

              <Text style={styles.postDescription}>
              
              Ikan bakar MaMa adalah salah satu destinasi kuliner yang ada dikota Tomohon yang wajib 
              anda kunjungi,  karena tempat ini menyajikan berbagai macam ikan fresh yang siap diolah sesuai 
              selera anda dengan bumbu khas Makassar yang sudah terkenal diseluruh Nusantara. 
              </Text>
              
              <Text style={styles.postenglish}>
              Ikan bakar MaMa is one of the mandatory culinary destinations in the city of Tomohon 
              You visit, because this place serves a variety of fresh fish that is ready to be processed accordingly
              Your special food with Makassar special spices that are famous throughout the archipelago.
              </Text>

             

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('ikanbakarmaps')}>
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
  