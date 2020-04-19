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

export default class bethesda extends React.Component {
   
  render(){
    return (
         <ScrollView>
            <View style={styles.headerContent}>
                
                <Image style={styles.avatar} 
                  source={{uri: 'https://fastly.4sqi.net/img/general/558x200/yeOUYHNywu6cFj5C8SqlQ6KcKPGMGZTBCNvzqs5gIts.jpg'}}/>
               
            
                <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                RUMAH SAKIT GMIM BETHESDA TOMOHON
              </Text>

              <Text style={styles.postDescription}>
              Rumah Sakit Bethesda terletak di tiga kelurahan yakni Kamasi, Talete I dan Paslaten 
              Kecamatan Tomohon, kota Tomohon dengan ketinggian 700 m di atas permukaan laut. 
              Pada mulanya RS Bethesda berlokasi di bekas Kantor Sinode dan Gedung Sekolah Wanita 
              yang terletak di bagian barat (sebelah barat jalan raya) kompleks RS Bethesda saat ini. 
              Sejak tahun 1982 RS Bethesda dipindahkan di sebelah timur. Sejak itu RS Bethesda mengalami 
              perluasan dan peningkatan sehingga luas tanah saat ini 11.930 M2 dan luas bangunan 9.418 M2.

             
              </Text>
              
              <Text style={styles.postDescription}>
              
              LAYANAN
            
              </Text>
              <Text style={styles.postDescription}>
              
              1. Pelayanan rawat jalan (Poliklinik), Setiap hari dari jam 08.00 sampai jam 18.00, 
              
              </Text>
              <Text style={styles.postDescription}>
              2. Pelayanan Radiologi, dilakukan 24 jam.
             </Text>
             <Text style={styles.postDescription}>
              3.Layanan Laboratorium, dilakukan 24 jam.
             </Text>
             <Text style={styles.postDescription}>
              4. Layanan Darurat, dilakukan 24 jam.
             </Text>
             <Text style={styles.postDescription}>
              5. Layanan USG, setiap hari mulai pukul 12.00 atau sesuai kesepakatan.
             </Text>
             <Text style={styles.postDescription}>
             6. Layanan Gastroskopi / Kolonoskopi, sesuai dengan perjanjian
             </Text>
             <Text style={styles.postDescription}>
             7. Layanan rawat inap, menyiapkan 224 tempat tidur dan semua pasien dilayani berdasarkan "Pendekatan Tim" sehingga diagnosis dan perawatan lebih tepat berdasarkan pemikiran lebih dari 1 dokter.
             </Text>
             
              
              <Text style={styles.postenglish}>
              Bethesda Hospital is located in three villages, namely Kamasi, Talete I and Paslaten 
              District of Tomohon, Tomohon city with an altitude of 700 m above sea level. 
              At first the Bethesda Hospital was located in the former Synod Office and the Women's 
              School Building located in the western part (west of the highway) at the current Bethesda 
              Hospital complex. Since 1982 Bethesda Hospital has been moved to the east. Therefore the 
              Bethesda Hospital increased and increased the land to 11,930 M2 and the building area to 9,418 M2.
              
              </Text>
              <Text style={styles.postenglish}>
             SERVICE
             </Text>
              <Text style={styles.postenglish}>
               1. Outpatient services (Polyclinic), Every day from 08.00 to 18.00.
              </Text>
              <Text style={styles.postenglish}>
              2. Radiology Services, conducted 24 hours.
             </Text>
             <Text style={styles.postenglish}>
             3. Laboratory Services, conducted 24 hours.
             </Text>
             <Text style={styles.postenglish}>
             4. Emergency Services, carried out 24 hours.
             </Text>
             <Text style={styles.postenglish}>
             5. USG services, every day starting at 12.00 or according to the agreement.
             </Text>
             <Text style={styles.postenglish}>
             6. Gastroscopy / Colonoscopy Services, in accordance with the agreement
             </Text>
             <Text style={styles.postenglish}>
             7. Inpatient services, prepared 224 beds and all patients are served based on the "Team Approach" so that diagnosis and treatment is more appropriate based on the thought of more than 1 doctor.
             </Text>
             
             
              </View>

             <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('bethesdamaps')}>
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
  