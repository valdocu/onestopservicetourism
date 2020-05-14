import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class tarif extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {id:1,  name: "TERM. BERIMAN – TINOOR",    status:"Rp4,800", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"},
        {id:2,  name: "TERM. BERIMAN – KINILOW",   status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:3,  name: "TERM. BERIMAN – KAKASKASEN",  status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:4,  name: "TERM. BERIMAN – WAILAN",  status:"Rp3,400", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:5,  name: "TERM. BERIMAN – KAYAWU",   status:"Rp4,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:6,  name: "TERM. BERIMAN – UNSRIT", status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:8,  name: "TERM. BERIMAN – KAMASI", status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:9,  name: "TERM. BERIMAN – WOLOAN",    status:"Rp3,600", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:10, name: "TERM. BERIMAN – TARA TARA",  status:"Rp5,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:11, name: "TERM. BERIMAN – RURUKAN",   status:"Rp5,000", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"},
        {id:12,  name: "TERM. BERIMAN – KUMELEMBUAI",    status:"Rp5,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"},
        {id:13,  name: "TERM. BERIMAN – KAATEN",   status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:14,  name: "TERM. BERIMAN – ULUINDANO",  status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:15,  name: "TERM. BERIMAN – PERKANTORAN",  status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:16,  name: "TERM. BERIMAN–TUMATANGTANG",   status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:17,  name: "TERM. BERIMAN – KAMPUNG JAWA", status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:18,  name: "TERM. BERIMAN – PINARAS", status:"Rp5,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:19,  name: "TERM. BERIMAN – TONDANGOW",    status:"Rp5,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:20, name: "TERM. BERIMAN – LAHENDONG",  status:"Rp4,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"} ,
        {id:21, name: "TERM. BERIMAN–PANGOLOMBIAN",   status:"Rp5,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"},
        {id:21, name: "TERM. BERIMAN – PERUM ATAS",   status:"Rp3,200", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"},
        {id:21, name: "TERM. BERIMAN – KAMPUS UNIMA",   status:"Rp4,800", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"},
        {id:21, name: "TERM. BERIMAN – KASURATAN",   status:"Rp5,300", image:"https://cadventura.com/wp-content/uploads/2014/09/bus.png"},
    
    ]
    };
  }

  renderItem = ({item}) => {
    return (
     
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return(
     
      <View style={{ flex: 1 }} >
          <Text style={styles.headerTitle}>
            Informasi tarif angkutan umum yang diberikan bisa saja berubah sesuai dengan
            penetapan dari pemerintah 
             </Text>
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 12,
    width:170,
  },
  headerTitle:{
    fontSize:20,
    color:"#00BFFF",
    marginTop:5,
    alignItems: 'center',
    fontWeight: 'bold'

  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
}); 