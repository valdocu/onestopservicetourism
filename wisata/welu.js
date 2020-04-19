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

export default class welu extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/welu-cafe-n-resto.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/spot-foto-gardu-pandang-di-welu-cafe-and-resto-tomohon.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/welu-cafe-and-resto_20180623_191406.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/03/menyaksikan-panorama-sunrise-di-welu-cafe-n-resto-tomohon.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              WE'LU CAFE & RESTO
              </Text>

              <Text style={styles.postDescription}>
              Berlokasi di Woloan Satu Utara, Kecamatan Tomohon Barat, Sulawesi Utara.
              Kawasan wisata ini memiliki suasana yang sejuk, karena memang berada di kawasan perbukitan
              atau yang disebut dengan bukit Welu.
              kondisi alam yang bagus khas perbukitan membuat tempat ini sangat asyik untuk refreshing. 
              di tempat ini kamu akan dimanjakan dengan pemandangan alam perbukitan yang sangat mempesona.
              ditempat ini kamu bisa menikmati pemandangan sambil ditemani berbagai macam makanan yang ada di welu cafe.
              Harga Masuk ke tempat wisata ini untuk kategori Anak-anak dikenakan biaya Rp.5000/orang
              dan untuk kategori dewasa dikenakan biaya 10.000/orang
              </Text>
              
              <Text style={styles.postenglish}>
              Located in the village Woloan 1, Tomohon city
              This tourist area has a cool atmosphere, because it is located in the hills
              or the so-called Welu hill.The good natural conditions typical of the hills make this place very cool for refreshing.
              in this place you will be spoiled by the view of the hills which is very charming.
              in this place you can enjoy the view while accompanied by various kinds of food in Welu Cafe.
              The price of admission to these attractions for the category of Children is charged Rp.5,000 / person
              and for the adult category it costs 10,000 / person
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/welu-cafe.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('welumaps')}>
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
  