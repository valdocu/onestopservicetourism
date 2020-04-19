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

export default class treehouse extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
            <Swiper>
                <Image style={styles.avatar} 
                  source={{uri: 'https://a0.muscache.com/im/pictures/e9c21fe5-5aaa-4026-92c6-2bf39ee2449c.jpg?im_w=480'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'https://a0.muscache.com/im/pictures/b901bf17-9ba9-4014-87ea-60a5b1188d4b.jpg?im_w=480'}}/>
                 <Image style={styles.avatar}
                  source={{uri: 'https://a0.muscache.com/im/pictures/f0534697-57f9-49c5-b996-37c6971531f9.jpg?im_w=960'}}/>

              
               
               </Swiper>
            
               
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Candlenut Treehouse
              </Text>

              <Text style={styles.postDescription}>
              Alamat: Rumah Ttorre, Jl. Tomohon-Rurukan, Lingkungan VI Kelurahan Paslaten I, Kecamatan Tomohon timur
              </Text>

              <Text style={styles.postDescription}>
              Telepon: 0815-2599-9951
              </Text>
              
              <Text style={styles.postenglish}>
              Address: Rumah Ttorre, Jl. Tomohon-Rurukan, Neighborhood VI, Paslaten I Sub-District, East Tomohon District
              </Text>
            
              <Text style={styles.postenglish}>
              Phone Number: 0815-2599-9951
              </Text>
             
             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('treehousemaps')}>
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
  