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

export default class tempattinggal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Highland Resort & Nature Tours",  onClick: 'samaria',   image:"https://lh3.googleusercontent.com/p/AF1QipN2ncMtS1OQep-gpnJ4ARzaPYkHrpPosaWpnTGy=w296-h202-n-k-rw-no-v1"},
        {id:2, title: "Happy Flower", onClick: 'happy',   image:"https://lh3.googleusercontent.com/proxy/Wc31Ixks5Kp6cWBVaxc3tKsUSs6LVX3sr-QtQw6dfdGlMmJHG0HWS4MqlazMcSbpTyPjRs2UZfBioHv1c9GH060jIi-eXyhDXuKnc4jwmjhBht3jgBjtB0xmAlTYHRPsk1FQh82XlYxcnNmCVfy2I6jXJ8Dldg=w296-h202-n-k-rw-no-v1"} ,
        {id:3, title: "Airy Terminal Beriman Tomohon", onClick: 'airyterminal',   image:"https://s3-ap-southeast-1.amazonaws.com/airy-beeld/14/90e5cd62/6a3f/4888/abf8/97d0e1775a08.jpeg"} ,
        {id:4, title: "Airy Lansot Sarongsong", onClick: 'airy',   image:"https://lh5.googleusercontent.com/p/AF1QipM9q240IYwUFvqEe9wTeCtFgt0WTcgh7jY0Mr8J=w408-h272-k-no"} ,
        {id:5, title: "Tulip Inn Tomohon", onClick: 'tulip',   image:"https://lh5.googleusercontent.com/p/AF1QipMRrvumLQ0rEtFFG8E2f7MnW_NS835qj3wuCmlP=w408-h257-k-no"} ,
        {id:6, title: "Onong Palace", onClick: 'onong',   image:"https://r-cf.bstatic.com/images/hotel/max1024x768/238/238511632.jpg"} ,
        {id:7, title: "Mountain View Home Stay", onClick: 'mountine',   image:"https://r-cf.bstatic.com/images/hotel/max1024x768/248/248426121.jpg"} ,
        {id:8, title: "Candlenut Treehouse", onClick: 'treehouse',   image:"https://a0.muscache.com/im/pictures/e9c21fe5-5aaa-4026-92c6-2bf39ee2449c.jpg?im_w=480"} ,

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