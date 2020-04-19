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

export default class mountine extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
            <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/248/248426121.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://static.tiket.photos/image/upload/v1582525574/hotel-extranet/33918500/2020/02/24/cbc343d3-311f-49b0-9a4c-7f4fa44cdba6-1582525526415-22a176044d1a349d15cb98e89bedc9e4.png'}}/>
              
               
               </Swiper>
            
               
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Mountain View Home Stay
              </Text>

              <Text style={styles.postDescription}>
              Alamat: Walian, Tomohon Selatan, Kota Tomohon, Sulawesi Utara
              </Text>

              <Text style={styles.postDescription}>
              Telepon: 0813-4029-0000
              </Text>
              
              <Text style={styles.postenglish}>
              Address: Walian, West Tomohon, Tomohon City, North Sulawesi
              </Text>
            
              <Text style={styles.postenglish}>
              Number Phone: 0813-4029-0000
              </Text>
             
             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('mountinemaps')}>
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
  