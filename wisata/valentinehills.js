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

import { Video } from 'expo-av';
import Swiper from 'react-native-web-swiper';



export default class valentinehills extends Component {
 
  
  render(){
   
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/FB_IMG_1559824697979.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/IMG-20180922-WA0018-1024x768.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/valentine-Hill.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/valentine-hills-woloan-tomohon.jpg'}}/>
                </Swiper>
            
               
            </View>
            <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                VALENTINE HILLS
              </Text>

              <Text style={styles.postDescription}>
              Puncak Valentine yang berlokasi di Kelurahan Woloan I Kecamatan Tomohon Barat adalah salah satu 
              objek wisata yang lagi ramai di kunjungi para penggemar pariwisata baik lokal maupun mancanegara.
              Puncak Valentine menyediakan berbagai macam keistimewaan mulai dari pemandangannya yang langsung 
              berhadapan dengan Gunung Lokon, hijaunya persawahan yang memberikan kesejukan serta merasa seperti kita berada di Bali.
              tempat wisata ini juga menyediakan beragam spot foto kekinian yang menarik. Salah satu spot foto yang menarik di lokasi ini, 
              yaitu tulisan ‘Valentine’ yang berlatar langsung Gunung Lokon.
              untuk bisa masuk ke tempat ini anda perlu mengeluarkan biaya sebesar 15.000/orang

              </Text>
              
              <Text style={styles.postenglish}>
              Valentine's Peak which is located in Woloan I Village, West Tomohon District is one
              more tourist attraction visited by fans of tourism both local and foreign.
              Valentine's Peak provides a variety of privileges ranging from a direct view
              faced with Lokon Mountain, the green rice fields that provide compatibility with us in Bali.
              this place also provides a variety of interesting contemporary photo spots. One interesting photo spot at this location,
              which is the word 'Valentine' which is set directly in Mount Lokon.
              to get into this place you need to pay a fee of Rp.15.000 / person
              </Text>
        
         <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/valentine-hills.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
         </View>    
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('valenmaps')}>
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
    padding:3,
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
    width: 100,
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
  