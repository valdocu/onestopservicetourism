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

export default class rsud extends React.Component {
   
  render(){
    return (
         <ScrollView>
            <View style={styles.headerContent}>
                
                <Image style={styles.avatar} 
                  source={{uri: 'https://sulut.kabardaerah.com/wp-content/uploads/2018/08/IMG-20180802-WA0031.jpg'}}/>
               
            
                <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                RSUD Anugerah Tomohon
              </Text>

              <Text style={styles.postDescription}>
              Terletak di Jl. Pinaras, Kelurahan Tumatangtang Satu, Kecamatan Tomohon Selatan. Kota Tomohon.
              layanan yang ada dirumah sakit ini diantaranya adalah Poliklinik Gizi klinis, Fisoterapi,
              Poliklinik spesialis kandungan, Poliklinik kesehatan anak, Poliklinik bedah, Poliklinik umum,
              Poliklinik penyakit dalam, Poliklinik gigi, Laboratorium dan radiologi.

             
              </Text>
              
              
              <Text style={styles.postenglish}>
              Located on Jl. Pinaras, Tumatangtang Satu Village, South Tomohon District. Tomohon City. 
              services at this hospital are Clinical Nutrition Clinic, Physiotherapy,
              Obstetric Specialist Polyclinic, Child Health Polyclinic, Surgical Polyclinic, General Polyclinic,
              Internal Medicine Polyclinic, Dental Polyclinic, Laboratory and Radiology.
              </Text>
             
             
              </View>

             <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('rsudmaps')}>
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
  postenglish:{
    fontSize:16,
    marginTop:10,
    fontWeight: 'bold'
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
  