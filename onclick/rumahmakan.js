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

export default class rumahmakan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Bakmi Krendang",  onClick: 'bakmikrendang',   image:"https://www.dimanaja.com/assets/images/cover/dd369737915a24c3f2cb0f649ebaa34d03868120.jpg"},
        {id:2, title: "Kobong Café", onClick: 'kobongcafe',   image:"https://media-cdn.tripadvisor.com/media/photo-p/18/99/c8/9c/sandwich-crunchy-ice.jpg"} ,
        {id:3, title: "Green Garden Reataurant Tomohon", onClick: 'greengarden',   image:"https://media-cdn.tripadvisor.com/media/photo-s/08/57/f2/33/restoran-green-garden.jpg"} ,
        {id:4, title: "KFC Tomohon",  onClick: 'kfc',   image:"https://lh3.googleusercontent.com/p/AF1QipO42XxLt0_O3BRLPTX0xt386CcFAWRwGcr0SZyM=s1600-w1000"},
        {id:5, title: "Ikan Bakar Mama",  onClick: 'ikanbakar',   image:"https://lh3.googleusercontent.com/-741UZkE0I9o/WuPosxdQFII/AAAAAAAAABc/pRitPH2oz_8FoVPe06r-Ecm2HPLsUEVGACLQBGAYYCw/2018-04-27.jpg"},
        {id:6, title: "RM Inspirasi Tomohon",  onClick: 'rminspirasi',   image:"https://cdn.idntimes.com/content-images/post/20191217/hanhanny-60841941-1963894330381469-3916423929361306297-n-c5f0d13e8dbd0a9f273e96f152872cbc_600x400.jpg"},
        {id:7, title: "Okoy Flower Garden",  onClick: 'okoy',   image:"https://lh3.googleusercontent.com/p/AF1QipPQKdite9s7iyFrPgMLo7TA2cPyH86x6v0QuEEE=w600-k"},

        {id:8, title: "Ragey Von Von",  onClick: 'ragey',   image:"https://cdn2.tstatic.net/manado/foto/bank/images/ist_20180711_190702.jpg"},
       
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
    color: 'white',
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