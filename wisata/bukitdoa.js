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

export default class bukitdoa extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-102424_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-102648_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-102819_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-102836_1.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              BUKIT DOA
              </Text>

              <Text style={styles.postDescription}>
              Bukit Doa Tomohon salah satu objek wisata alam sekaligus tempat wisata religi, 
              khususnya bagi umat kristiani di Tomohon, Sulawesi Utara. 
              Bukit ini berada tepat di bawah kaki Gunung Mahawu, sehingga memiliki udara yang sejuk, 
              dan alam yang indah khas suasana pengunungan. Selain itu di Bukit Doa ini kita dapat menjumpai 
              Amphiteater yang berbentuk setengah lingkaran yang sekilas tampak seperti Colloseum di Yunani.
              Pemandangan di puncak Bukit Doa sungguh memukau. Di puncak bukit 
              terdapat Chapel of Mother Mary atau Kapel Maria. Bentuknya yang tak seperti 
              gereja-gereja biasa, membuat gereja ini menjadi spot favorit untuk berfoto.
              untuk menikmati keindahan bukit doa anda cukup membayar tike masuk sebesar Rp.20.000/orang
              </Text>
              
              <Text style={styles.postenglish}>
              Tomohon Hill, one of the natural attractions as well as religious attractions,
              especially for Christians in Tomohon, North Sulawesi.
              This hill is located right under the foot of Mount Mahawu, so it has cool air,
              and beautiful nature typical of the mountain atmosphere. In addition, on this Mount of Prayer we can find
              A semicircular amphitheater that at first glance looks like a Colloseum in Greece.
              The view at the top of the Mount of Prayer is truly amazing. On the hilltop
              there is the Chapel of Mother Mary or the Chapel of Mary. The shape is not like
              ordinary churches, making this church a favorite spot for photos.
              to enjoy the beauty of the prayer hill you only need to pay when admission is Rp. 20,000 / person
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/Bukit-Doa.mp4 ' }}
               useNativeControls
             
              
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('bukitdoamaps')}>
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
  