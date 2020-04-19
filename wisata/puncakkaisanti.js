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

export default class kaisanti extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://img-z.okeinfo.net/library/images/2018/08/10/bralujy46y3pt2mrgd3g_21400.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/421c16a63624e1719a8829af36ae8085-1024x683.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/spot-foto-gardu-pandang-di-kaisanti-woloan-tomohon-1024x575.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/timthumb.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              PUNCAK KAISANTI
              </Text>

              <Text style={styles.postDescription}>
              Puncak Kaisanti ini terletak di kelurahan Woloan Dua, Kecamatan Tomohon Barat, 
              Kota Tomohon.Puncak Kaisanti pun menyediakan tempat untuk bersantai seperti kanopi sambil 
              menikmati seduhan kopi hangat dan pisang goroho yang melengkapi suasana dalam menikmati keindahan alam.
              di tempat ini anda akan dimanjakan dengan pemandangan gunung lokon, persawahan dan berbagai macam bunga 
              yang ditanam. untuk masuk ke tempat wisata ini anda akan dikenakan biaya sebesar Rp. 25.000/orang 
              </Text>
              
              <Text style={styles.postenglish}>
              Kaisanti peak is located in Woloan Dua, West Tomohon District,
              the city of Tomohon.The Kaisanti peak is located in Woloan Dua, West Tomohon District,
              Tomohon City. The summit of Kaisanti also provides a place to relax like a canopy while
              enjoy steeping warm coffee and goroho banana that complements the atmosphere in enjoying the beauty of nature.
              in this place you will be spoiled with views of Mount Lokon, rice fields and various flowers
              planted. to enter this tourist attraction you will be charged a fee of Rp. 25,000 / person
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/Kaisanti-Tomohon.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('kaisantimaps')}>
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
  