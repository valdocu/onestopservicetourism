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

export default class gunungmaria extends React.Component {
   
  render(){
    return (
         <ScrollView>
            <View style={styles.headerContent}>
                
                <Image style={styles.avatar} 
                  source={{uri: 'https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/rs-gunung-maria-tomohon-HCFH00000983.jpg'}}/>
               
            
                <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                Rs. Gunung Maria Tomohon
              </Text>

              <Text style={styles.postDescription}>
              RS Gunung Maria Tomohon merupakan salah satu rumah sakit yang berada di kota Tomohon.
              beralamat di Jl. Sejahtera No.282, Kolongan, Kec. Tomohon Tengah, Kota Tomohon, Sulawesi Utara.
              fasilitas medis yang tersedia diantaranya adalah instalasi gawat darurat (IGD), Neonatal Intensive Care Unit (NICU), Radiologi, Lboratorium, Apotek dan 
              Poliklinik.
             
              </Text>
            
              
              <Text style={styles.postDescription}>
              Gunung Maria Tomohon Hospital is one of the hospitals in the city of Tomohon.
              located at Jl. Sejahtera No.282, Kolongan, Kec. Tomohon Tengah, Tomohon City, North Sulawesi.
              the only medical facilities available are the emergency department (IGD), the Neonatal Intensive Care Unit (NICU), Radiology, Laboratory, Pharmacy and Polyclinic.
              </Text>
             
             
              </View>

             <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('gunungmariamaps')}>
             <Image style={styles.userImage}
                  source={{uri: 'https://www.gstatic.com/images/branding/product/1x/maps_round_512dp.png'}}/>
             </TouchableOpacity>
            
            
               
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
  postDescription:{
    fontSize:16,
    marginTop:5,

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
  