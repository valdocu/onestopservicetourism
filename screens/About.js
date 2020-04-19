import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class about extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerTitle}>
                About Us
              </Text>
          </View>

          <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                One Stop Service Tourism Kota Tomohon
              </Text>

              <Text style={styles.postDescription}>
              Aplikasi ini memberikan layanan informasi wisata yang lengkap sehingga mempermudah para 
              wisatawan mendapatkan informasi mengenai objek wisata yang ada di kota Tomohon. 
              Aplikasi ini memberikan informasi mengenai objek wisata, Rumah makan, Homestay, 
              Rumah Sakit (RS), stasiun pengisian bahan bakar (SPBU), nomor telepon darurat, dan 
              tarif angkutan umum yang ada di kota Tomohon. 
              </Text>
              
              <Text style={styles.english}>
              This application provides a complete tourist information service making it easier for the
              tourists get information about tourist attractions in the city of Tomohon.
              This application provides information about attractions, restaurants, homestays,
              Hospital (RS), fueling stations (gas stations), emergency telephone numbers, and
              Public transportation rates in the city of Tomohon.
              </Text>
             

              <Text style={styles.date}>
                2017-11-27 13:03:01
              </Text>

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/mem-laoh.jpg'}}/>

                <Text style={styles.name}>
                Lidya Chitra Laoh, S.Kom.,M.MSI                   
                </Text>
                
                
              </View>

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/sir-stenly.jpg'}}/>

                <Text style={styles.name}>
                Stenly Ibrahim Adam, S.Kom.,M.Sc
                </Text>

                
                
              </View>

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/20191110_152803_1-758x1024.jpg'}}/>

                <Text style={styles.name}>
                    Rivaldo Kaunang
                </Text>
                <Text style={styles.name}>
                    (Peneliti 1)
                </Text>
                
                
              </View>

              <View style={styles.profile}>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/20191110_111234_1.jpg'}}/>

                <Text style={styles.name}>
                    Jad Heluku
                </Text>
                <Text style={styles.name}>
                    (Peneliti 2)
                </Text>
                
                
              </View>
            
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    padding:30,
    alignItems: 'center',
    backgroundColor: "#00BFFF",
  },
  headerTitle:{
    fontSize:30,
    color:"#FFFFFF",
    marginTop:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  postContent: {
    flex: 1,
    padding:30,
  },
  postTitle:{
    fontSize:26,
    fontWeight:'600',
  },
  postDescription:{
    fontSize:16,
    marginTop:10,
  },
 
  date:{
    color: '#696969',
    marginTop:10,
  },
  avatar: {
    width: 80,
    height: 85,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "#00BFFF",
  },
  profile:{
    flexDirection: 'row',
    marginTop:20
  },
  english:{
    fontSize:17,
    
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
   
  }, 
  name:{
    fontSize:17,
    marginTop: 20,
    color:"#00BFFF",
    fontWeight:'600',
    alignSelf:'center',
    marginLeft:10
  }, 
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  }
});
  