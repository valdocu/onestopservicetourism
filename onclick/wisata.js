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
  Button
} from 'react-native';

export default class wisata extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Valentine Hills",  onClick: 'valentinehills',   image:"https://www.liputankawanua.com/wp-content/uploads/2019/06/FB_IMG_1559824697979.jpg"},
        {id:2, title: "We'lu Cafe & Resto", onClick: 'welu',   image:"https://pigunigu.com/wp-content/uploads/2019/01/spot-foto-gardu-pandang-di-welu-cafe-and-resto-tomohon.jpg"} ,
        {id:3, title: "Puncak Kaisanti ", onClick: 'puncakkaisanti',     image:"https://img-z.okeinfo.net/library/images/2018/08/10/bralujy46y3pt2mrgd3g_21400.jpg"}, 
        {id:4, title: "Puncak Mahoni Tomohon", onClick: 'mahoni' ,   image:"https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c315.0.809.809a/s640x640/68725401_120437085970301_4107883318308125329_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Gu6K0Yj_dUEAX-HBXtM&oh=282c3c10a64b8818456d631eccd5483f&oe=5EDFE041"},
        {id:5, title: "Puncak Tetetana", onClick: 'tetetana', image:"https://jejakperahu.files.wordpress.com/2017/03/img_5026.jpg?w=736"},
        {id:6, title: "Jendela Dunia", onClick: 'jendeladunia', image:"https://3.bp.blogspot.com/-qrT-iAy__lw/XEK5WMWBGfI/AAAAAAAAIoU/LPYxK0aOYZAAXLqtMm5ntq8IddBEPYVvQCLcBGAs/w585/jendela%2Bdunia%2Btomohon.jpg"},
        {id:7, title: "Amphitheater Woloan", onClick: 'amphitheater',image:"https://4.bp.blogspot.com/-dEO6pILRUXU/XJO8kzR_IgI/AAAAAAAABVs/g6nmx1ToQfo0_Yd9CdstuvLggjZeP6g0QCLcBGAs/s640/Amphitheater%2BWoloan.png"},
        {id:8, title: "Hutan Kota Tomohon", onClick: 'hutan',       image:"https://asset.kompas.com/crops/3hqL7cGjQ0PxhVtIZ36kXu30UAc=/0x0:1000x667/750x500/data/photo/2019/01/23/3671701645.jpg"}, 
        {id:9, title: "Hutan Pinus Lahendong", onClick: 'hutanpinus', image:"https://cdns.klimg.com/merdeka.com/i/w/news/2017/02/26/816741/content_images/670x335/20170226192644-1-wisata-pinus-lahendong-001-isn.jpg"},
        {id:10, title:"Danau Linow",  onClick: 'danaulinouw'  ,     image:"https://pesona.travel/media/danau-linow-danau-tiga-warna-di-kaki-gunung-lokon_164902.jpg"}, 
        {id:11, title: "Bukit Doa",  onClick: 'bukitdoa',          image:"https://pigunigu.com/wp-content/uploads/2019/02/bukit-doa-mahawu-tomohon.jpg"},
        {id:12, title: "Air Terjun Tumimperas", onClick: 'tumimperas' ,   image:"https://1.bp.blogspot.com/-WZ3pB5tw7dA/WE9QjUI6JoI/AAAAAAAAARw/wMlTdI2b0Vcyi5w-5MNeo5ClFOlNNWlRACEw/s1600/Air%2BTerjun%2BTumimperas.jpg"}, 
        
      ]
    };
  }

  onPress(item) {
    this.props.navigation.navigate(item.onClick)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity  onPress={() => {this.onPress(item)}}>
                <View style={styles.card}>

                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardContent}>
                    
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>

                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  