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

export default class mahoni extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/Screenshot_20200321-150737_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200424-203355_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200424-203330_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/mahonii-1024x768.jpg'}}/>
               </Swiper>
             </View>
             
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              PUNCAK MAHONI
              </Text>

              <Text style={styles.postDescription}>
              Puncak Mahoni terletak di kelurahan Kakaskases, Kec. Tomohon Utara Kota Tomohon.
              di tempat ini anda akan dimanjakan dengan keindahan berbagai macam bunga yang bisa dijadikan
              tempat foto untuk mengabadikan momen saat berada ditempat ini. tak kalah juga ditempat ini
              anda akan melihat keindahan kota tomohon yang begitu indah. untuk masuk ke tempat wisata ini, anda akan
              dikenakan biaya karcis sebesar Rp. 15.000  karcis tersebut bisa ditukar dengan teh atu kopi.
              </Text>
              
              <Text style={styles.postenglish}>
              Mahoni peak is located in the village of Kakaskases Tomohon City.
              in this place you will be spoiled by the beauty of various kinds of flowers that can be used
              a photo place to capture moments in this place. no less in this place too
              You will see the beauty of the city of Tomohon that is so beautiful. to enter this tourist spot, you will
              a ticket fee of Rp. 15,000 tickets can be exchanged for tea or coffee.
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/05/videoplayback-5.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('mahonimaps')}>
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
  date:{
    color: 'blue',
    marginLeft: 10,
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
  