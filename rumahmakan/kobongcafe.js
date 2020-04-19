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

export default class kobongcafe extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-p/18/99/c8/9c/sandwich-crunchy-ice.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-100214_1.jpg'}}/>
                
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Kobong Cafe
              </Text>

              <Text style={styles.postDescription}>
              Kobong Café merupakan Café yang berjarak 2.23 KM dari Tomohon Selatan, Lebih Tepatnya Beralamat di Jl. Raya Tomohon Lansot Tomohon Sulawesi Utara
              "Suasana cafe asik,nyaman cocok buat keluarga juga tempat nongkrong anak muda."
              </Text>
              
              <Text style={styles.postenglish}>
              Kobong Café is a café located 2.23 KM from Tomohon Selatan, more precisely located on Jl. Raya Tomohon Lansot Tomohon North Sulawesi
              "A cool, comfortable cafe suitable for families as well as a place to hang out young people."
              </Text>

              

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('kobongcafemaps')}>
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
  