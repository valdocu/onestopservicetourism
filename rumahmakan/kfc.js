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

export default class kfc extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://lh3.googleusercontent.com/p/AF1QipOjyH71cZ40fOl-IETMpvXY__oHvaai_TELrC1M=s1600-w1000'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://fastly.4sqi.net/img/general/200x200/3253660_6z-eU3uXWedp7FxHpjX5U3pnVbdwiSwNWcVHHhP_T9g.jpg'}}/>
                
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              KFC Tomohon
              </Text>

              <Text style={styles.postDescription}>
              KFC merupakan Fast Food Restaurant yang berjarak 0.58 KM dari Tomohon Selatan, Lebih Tepatnya Beralamat di Jl. Raya Tomohon No. 74-75 Talete Satu Tomohon Sulawesi Utara
              </Text>
              
              <Text style={styles.postenglish}>
              Fast food restaurants located in the downtown. With a variety of menus are offered to costumers make them interested to visit. Make yourself comfort from the cold weather of Tomohon with cream soup
              0.58 KM away from South Tomohon, more precisely located on Jl. Raya Tomohon No. 74-75 Talete Satu Tomohon North Sulawesi
              </Text>

            

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('kfcmaps')}>
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
  