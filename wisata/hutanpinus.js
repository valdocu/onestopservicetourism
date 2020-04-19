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

export default class hutanpinus extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-101024_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-101107_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-101133_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-101225_1.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              HUTAN PINUS LAHENDONG
              </Text>

              <Text style={styles.postDescription}>
              Terletak di Kelurahan Lahendong, Kecamatan Tomohon Selatan, Kota Tomohon.
              Anda akan semakin betah berada di tempat ini ketika menikmati indahnya danau buatan dengan air yang berwarna-warni ketika diterpa sinar matahari.
              saat menyusuri tempat ini anda harus berhati-hati. Pasalnya, selain permukaan tanahnya yang cukup licin juga terdapat tempat-tempat berbahaya. 
              Sebaiknya ikuti papan-papan petunjuk yang terpasang atau jangan keluar dari pembatas jalan setapak.
              untuk masuk ke tempat wisata ini anda akan dikenakan biaya untuk 
              wisatawan domestik sebesar Rp. 20.000/orang dan untuk wisatawan mancanegara 
              dikenakan biaya Rp.30.000/orang
              </Text>
              
              <Text style={styles.postenglish}>
              Located in the Village Lahendong, South Tomohon District, Tomohon City.
              You will be more comfortable in this place when you enjoy the beauty of artificial lakes with colorful water when exposed to sunlight.
              when down this place you must be careful. Because, in addition to the surface of the land which is quite slippery there are also dangerous places.
              It is recommended that you follow the attached signs or do not leave the path divider.
              to enter this tourist attraction you will be charged for
              domestic tourists Rp. 20,000 / person and for foreign tourists
              IDR 30,000 / person is charged
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/hutan-pinus-lahendong.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('hutanpinusmaps')}>
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
  