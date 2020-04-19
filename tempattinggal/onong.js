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
                  source={{uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/238/238511632.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/12/24/30/9c/onongs-palace.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/13/16/88/20160915-091629-largejpg.jpg'}}/>
               
               </Swiper>
            
    
 



             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Onong Palace Tomohon
              </Text>

              <Text style={styles.postDescription}>
              Alamat: Jl. Kimereng Kali RW.04, Dusun IV, Desa Kinilow, Kinilow, Kec. Tomohon Utara, Kota Tomohon, Sulawesi Utara 95121
              </Text>
              <Text style={styles.postDescription}>
              Telepon: (0431) 3157090
              </Text>
              <Text style={styles.postenglish}>
              Address: Jl. Kimereng Kali RW.04, Hamlet IV, Kinilow Village, Kinilow, North Tomohon District, Tomohon City, North Sulawesi 95121
              </Text>
              <Text style={styles.postenglish}>
              Phone Number: (0431) 3157090
              </Text>
             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('onongmaps')}>
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
  