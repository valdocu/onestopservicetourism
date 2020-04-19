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


export default class bakmi extends React.Component {
   
  render(){
 
    return (
         <ScrollView>
            <View style={{height: 250}}>
               
                <Image style={styles.avatar} 
                  source={{uri: 'https://dtlscuh0h90jk.cloudfront.net/seller/photos/IDGFSTI000025fw_0_5fc23b64fbdd4181a47fd48a6a145c84.jpg'}}/>
    
               
             </View>
               
             <View style={styles.postContent}>
              <Text style={styles.postTitle}>
              Bakmi Krendang
              </Text>

              <Text style={styles.postDescription}>
              Bakmi Krendang merupakan Chinese Restaurant yang berjarak 0.40 KM dari 
              Tomohon Selatan, Lebih Tepatnya Beralamat di Matani Tiga Jl. Raya Tomohon Tomohon Sulawesi Utara
              </Text>
              
              <Text style={styles.postenglish}>
              Bakmi Krendang is a Chinese restaurant within 0.40 KM from South Tomohon, more precisely located at Matani Tiga 
              Jl. Raya Tomohon Tomohon North Sulawesi
              </Text>
             
              
              <View style={styles.headerContent}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('bakmimaps')}>
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
  