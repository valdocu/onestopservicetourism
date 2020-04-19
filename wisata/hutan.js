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
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-100003_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-100214_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-100439_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-100259_1.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              HUTAN KOTA TOMOHON
              </Text>

              <Text style={styles.postDescription}>
              Terletak dikelurahan Talete satu, Kec. Tomohon Tengah, Kota Tomohon
              "Taman Hutan Kota ini adalah milik Pemerintah Kota Tomohon yang dapat digunakan siapa saja. Dan tempat ini cocok untuk berbagai kegiatan Olahraga, Kesenian dan Retret."
              suasana hutan yang sejuk dapat membuat anda merasa tenang ditempat ini. 
              anda juga bisa mengabadikan moment ditempat ini karena terdapat berbagai 
              macam spot foto keren dengan tema alam.
              untuk masuk ditempat ini, anda tidak dikenakan biaya sedikitpun.
              </Text>
              
              <Text style={styles.postenglish}>
              Located in Talete 1, Tomohon City.
              "This City Forest Park is owned by the Tomohon City Government which can be used by anyone. And this place is suitable for various Sports, Arts and Retreat activities."
              the cool atmosphere of the forest can make you feel calm in this place.
              You can also capture the moment in this place because there are various
              kinds of cool photo spots with natural themes.
              to enter this place, you are not charged at all.
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/Hutan-kota-tomohon.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('hutankotamaps')}>
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
  