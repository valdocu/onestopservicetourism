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

export default class greengarden extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/16/63/5f/ce/green-garden.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://lh3.googleusercontent.com/p/AF1QipOmSr3Poy7lxeT7cN_p1TAzl93ZzEdROyMHKmjG=s1600-w1000'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/16/63/5f/c5/green-garden.jpg'}}/>
               
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Green Garden 
              </Text>

              <Text style={styles.postDescription}>
              Green Garden Restaurant merupakan Chinese Restaurant yang berjarak 3.45 KM dari Tomohon Selatan, 
              Lebih Tepatnya Beralamat di Kakaskasen Satu Jl. Kasih Sayang Tomohon Sulawesi Utara
              </Text>
              
              <Text style={styles.postenglish}>
              Green Garden Restaurant is a Chinese restaurant which is 3.45 KM from South Tomohon, more precisely located at Kakaskasen Satu Jl. Kasih Kasih Tomohon, North Sulawesi
              </Text>

               

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('greengardenmaps')}>
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
  