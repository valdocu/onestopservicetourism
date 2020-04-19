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


export default class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {id:1, name: "WISATA", position:"(Tour)",         onclick:'wisata' ,              image:"https://www.oxbridgeacademy.edu.za/wp-content/uploads/2014/10/Tourism.png"},
            {id:1, name: "RUMAH MAKAN", position:"(Eat)",     onclick: 'rumahmakan',              image:"https://owips.com/sites/default/files/clipart/hotel-clipart/314922/hotel-clipart-cutlery-314922-5856723.png"},
            {id:2, name: "TEMPAT TINGGAL", position:"(Home Stay)",onclick: 'tempattinggal', image:"https://www.armadarent.com/wp-content/uploads/2019/12/homestay-jogja.png"} ,
            {id:3, name: "SPBU", position:"(Fuel)",           onclick: 'spbu',    image:"https://cdn2.iconfinder.com/data/icons/maki/100/fuel-512.png"} ,
            {id:4, name: "RUMAH SAKIT", position:"(Hospital)",onclick: 'rumahsakit',   image:"https://2.bp.blogspot.com/-Z6ieHKLw01s/Wed1YM6lEoI/AAAAAAAAamA/b2zShltJWCEagC-G619qs6ummFsv8YqkgCLcBGAs/s1600/hospital11.png"} ,
            {id:5, name: "NO.DARURAT", position:"(Emergency)",onclick: 'nodarurat', image:"https://cdn2.iconfinder.com/data/icons/medicine-19/100/feb-medicine-go-10-512.png"} ,
            {id:6, name: "TARIF ANGKUTAN UMUM", position:"(Public transport rates)", onclick: 'tarif',          image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
            
          ]
        };
      }
     
      onPress(item) {
        this.props.navigation.navigate(item.onclick)
      }

  render(){
    return (
       
   <ScrollView>
      <View style={{height: 250}}>
     
           <Swiper >
                <Image style={styles.avatar} 
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/welcome-fix-1024x538.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/wisataa.jpg'}}/>
                <Image style={styles.avatar}
                  source={{uri: 'http://fkep.unklab.site/wp-content/uploads/2020/04/home.jpg'}}/>
               
           </Swiper> 
          
      </View>
      <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={3}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.onPress(item)}}>
               
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
   </ScrollView>
     
       
      
      
       
     
    
    );
  }
}



const styles = StyleSheet.create({
 
  avatar: {
    width: 360,
    height: 250,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "black",
    marginBottom:10,
    alignItems: 'center',
   
   
  },
  name:{
    fontSize:15,
    color:"#FFFFFF",
    fontWeight:'600',
    
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  info:{
    fontSize:22,
    color: "#696969",
  },
  container:{
    flex:5,
    backgroundColor: "white"
    
  
 
    
  },
  list: {
    paddingHorizontal: 0,
    padding: 10,
    backgroundColor:"white",
    
    
  },
  listContainer:{
   padding: 10,
   alignItems:'center',
   backgroundColor: "white"
   
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 7.50,
    elevation: 4,

    marginVertical: 1,
    backgroundColor:"white",
    flexBasis: '33%',
    marginHorizontal: 1,
  },
  cardFooter: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center",
    
  },
  userImage:{
    height: 100,
    width: 100,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    
  },
  name:{
    fontSize:12,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
    
  },
  position:{
    fontSize:14,
    flex:2,
    alignSelf:'center',
    color:"#696969"
  }
 
});
  