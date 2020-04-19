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

export default class amphitheater extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/66479487-150543379359938-9045766662964909010-n-6fc63ce52c6edad814ee1a90352212c0_600x400.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/83252793-180232743057502-6886070685520852610-n-d2d2e0bc974109d861b3ddf704d8adb0.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Amphitheater-Woloan-Tempat-Wisata-di-Tomohon-1024x682.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/BrCxFeoCQAIcgVp.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              AMPHITHEATER WOLOAN
              </Text>

              <Text style={styles.postDescription}>
              Terletak di Kelurahan Woloan 1, Tomohon Barat, Kota Tomohon.
              ditempat ini kamu akan dimanjakan dengan pemandangan bertema pedesaan serta persawahan
              hijau ditambah keindahan gunung lokon. dari tempat ini pun kamu bisa mempelajari secara singkat
              sejarah kota Tomohon lewat situs-situs budaya yang ada , salah satunya adalah Waruga.
              selain menawarkan pemandangan yang eksotis, amphitheater ini juga menjadi
              salah satu lokasi untuk menyelenggarakan acara-acara budaya. untuk masuk ke tempat wisata
              ini, anda akan dikenakan biaya sebesar Rp.5000
              </Text>
              
              <Text style={styles.postenglish}>
              Located in Woloan 1 Village, Tomohon City.
              in this place you will be spoiled with views of rural-themed scenery and rice fields
              Green plus the beauty of Mount Lokon. from this place you can learn briefly
              Tomohon city history through cultural sites, one of which is Waruga.
              besides offering an exotic sight, this amphitheater has also become
              one of the locations to hold cultural events. to enter tourist attractions
              this, you will be charged Rp. 5,000
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/amphitheater-woloan.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('amphitheatermaps')}>
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
  