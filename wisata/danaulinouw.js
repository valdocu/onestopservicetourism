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

export default class danaulinouw extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
                <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-102116_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-102156_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-101632_1.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/Screenshot_20200408-101822_1.jpg'}}/>
               </Swiper>
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              DANAU LINOW
              </Text>

              <Text style={styles.postDescription}>
              Danau Linow ini berada di Kota Tomohon, tepatnya di dekat ruas jalan 
              Tomohon-Kawangkoan, Kelurahan Lahendong, Kecamatan Tomohon Selatan.
              Di Danau Linow ini tentu saja anda akan
              dimanjakan dengan pemandangan danau yang begitu indah.
              warna air danau ini dapat berubah-ubah menjadi hijau, biru dan kuning kecoklatan.
              Untuk menikmati keindahan Danau Linow, anda cukup membayar tiket 
              masuk sebesar Rp Rp.25.000/orang.Tiket masuk ini juga bisa ditukarkan dengan minuman kopi atau teh di cafe yang 
              ada di kawasan Danau Linow.
              </Text>
              
              <Text style={styles.postenglish}>
              Lake Linow is located in Tomohon City, precisely near the road segment
              Tomohon-Kawangkoan, Lahendong Village, South Tomohon District.
              At Lake Linow you will of course
              spoiled by the beautiful views of the lake.
              the color of this lake water can change to green, blue and brownish yellow.
              To enjoy the beauty of Lake Linow, you just pay for the ticket
              Rp. 25,000 / person. This entry ticket can also be exchanged for coffee or tea drinks at a cafe
              in the Lake Linow area.
              </Text>

              <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Video
               source={{ uri: ' http://fkep.unklab.site/wp-content/uploads/2020/03/Danau-Linouw.mp4' }}
               useNativeControls
               
               style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 200}}
                />
              </View>   

             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('danaumaps')}>
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
  