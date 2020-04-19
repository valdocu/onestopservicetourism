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
                  source={{uri: ' https://media-cdn.tripadvisor.com/media/photo-m/1280/17/08/c6/dd/tulip-inn-tomohon.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://ik.imagekit.io/tvlk/apr-asset/guys1L%2BYyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/traveloka/hotel/asset/20013090-a22a240c77e5b6aa95f4461cb79c9798.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://origin.pegipegi.com/jalan/images/pictM/Y5/Y920325/Y920325001.jpg'}}/>
               
               </Swiper>
    
   
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Tulip Inn Tomohon
              </Text>

              <Text style={styles.postDescription}>
             Alamat: Jl. Terminal Beriman Tomohon, Paslaten Satu, Tomohon Tim., Kota Tomohon, Sulawesi Utara 95446
              </Text>
              <Text style={styles.postDescription}>
              Telepon: 0812-2623-6278
              </Text>
              <Text style={styles.postenglish}>
              Address: Jl. Beriman Tomohon Terminal, Paslaten Satu, Tomohon Tim., Tomohon City, North Sulawesi 95446
              </Text>
              <Text style={styles.postenglish}>
              Phone Number: 0812-2623-6278
              </Text>
             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('tulipmaps')}>
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
  