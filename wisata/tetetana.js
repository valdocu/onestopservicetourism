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

export default class tetetana extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/maxresdefault-1-1024x576.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/Screenshot_20200321-151550_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/Screenshot_20200321-151705_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/Screenshot_20200321-151834_1.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              PUNCAK TETETANA TOMOHON
              </Text>

              <Text style={styles.postDescription}>
              Terletak didesa Kumalembuai, Kota Tomohon.
              Dari atas puncak ini, kamu  bisa melihat pemandangan Kota Manado dan teluknya. 
              Di sebelahnya ada Gunung Klabat sebagai gunung tertinggi di Sulawesi Utara. 
              Di sebelahnya lagi ada Kota Bitung. Bergeser lagi ada Kota Tondano dan danaunya.
              Pemandangan di bukit ini memang sangat indah. Hamparan rumput yang luas menjadi 
              pijakan wisatawan untuk menikmati indahnya destinasi ini. Selain itu ada pula 
              rumpun tanaman bunga di kawasan ini. Tanaman indah berwarna-warni, menjadi alternatif 
              lain untuk dinikmati. untuk masuk ke tempat ini anda akan dikenakan biaya sebesar Rp. 20.000/orang
              </Text>
              
              <Text style={styles.postenglish}>
              Located in the village of Kumalembuai, Tomohon City.
              From the top of this peak, you can see views of the city of Manado and the bay.
              Next to it is Mount Klabat, the highest mountain in North Sulawesi.
              Next to it is the City of Bitung. Moving again there is the City of Tondano and the lake.
              The view on this hill is indeed very beautiful. A wide expanse of grass becomes
              tourists footing to enjoy the beauty of this destination. In addition there are also some
              flowering groves in this region. Beautiful colorful plants, an alternative
              another to enjoy. to enter this place you will be charged Rp. 20,000 / person
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/tetetana-2.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('tetetanamaps')}>
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
  