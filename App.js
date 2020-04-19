import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {createSwitchNavigator, createAppContainer,createDrawerNavigator
, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import Home from './screens/Home';
import About from './screens/About';

import wisata from './onclick/wisata';
import rumahsakit from './onclick/rumahsakit';
import rumahmakan from './onclick/rumahmakan';
import tempattinggal from './onclick/tempattinggal';
import nodarurat from './onclick/nodarurat';
import spbu from './onclick/spbu';

//wisata
import valentinehills from './wisata/valentinehills';
import welu from './wisata/welu';
import puncakkaisanti from './wisata/puncakkaisanti';
import mahoni from './wisata/mahoni';
import tetetana from './wisata/tetetana';
import jendeladunia from './wisata/jendeladunia';
import amphitheater from './wisata/amphitheater';
import hutan from './wisata/hutan';
import hutanpinus from './wisata/hutanpinus';
import danaulinouw from './wisata/danaulinouw';
import bukitdoa from './wisata/bukitdoa';
import tumimperas from './wisata/tumimperas';
//RM
import bakmikrendang from './rumahmakan/bakmikrendang';
import greengarden from './rumahmakan/greengarden';
import ikanbakar from './rumahmakan/ikanbakar';
import kfc from './rumahmakan/kfc';
import kobongcafe from './rumahmakan/kobongcafe';
import okoy from './rumahmakan/okoy';
import ragey from './rumahmakan/ragey';
import rminspirasi from './rumahmakan/rminspirasi';

//HomeStay
import airy from './tempattinggal/airy';
import happy from './tempattinggal/happy';
import onong from './tempattinggal/onong';
import samaria from './tempattinggal/highland';
import tulip from './tempattinggal/tulip';
import airyterminal from './tempattinggal/airyterminal';
import mountine from './tempattinggal/mountine';
import treehouse from './tempattinggal/treehouse';

//SPBU
import spbu1 from './spbu/spbu1';
import spbu2 from './spbu/spbu2';
import spbu3 from './spbu/spbu3';
import spbu4 from './spbu/spbu4';
import spbu5 from './spbu/spbu5';
import spbu6 from './spbu/spbu6';

import tarif from './tarif/tarif';

//maps
import valenmaps from './maps/valenmaps';
import welumaps from './maps/welumaps';
import kaisantimaps from './maps/kaisantimaps';
import mahonimaps from './maps/mahonimaps';
import tetetanamaps from './maps/tetetanamaps';
import jendelamaps from './maps/jendelamaps';
import amphitheatermaps from './maps/amphitheatermaps';
import hutankotamaps from './maps/hutankotamaps';
import hutanpinusmaps from './maps/hutanpinusmaps';
import danaumaps from './maps/danaumaps';
import bukitdoamaps from './maps/bukitdoamaps';
import airterjunmaps from './maps/airterjunmaps';

import bakmimaps from './maps/bakmimaps';
import kobongcafemaps from './maps/kobongcafemaps';
import greengardenmaps from './maps/greengardenmaps';
import kfcmaps from './maps/kfcmaps';
import ikanbakarmaps from './maps/ikanbakarmaps';
import rminspirasimaps from './maps/rminspirasimaps';
import okoymaps from './maps/okoymaps';
import rageymaps from './maps/rageymaps';

import polresmaps from './maps/polresmaps';

import bethesdamaps from './maps/bethesdamaps';
import gunungmariamaps from './maps/gunungmariamaps';
import rsudmaps from './maps/rsudmaps';

import spbu1maps from './maps/spbu1maps';
import spbu2maps from './maps/spbu2maps';
import spbu3maps from './maps/spbu3maps';
import spbu4maps from './maps/spbu4maps';
import spbu5maps from './maps/spbu5maps';
import spbu6maps from './maps/spbu6maps';

import airymaps from './maps/airymaps';
import happymaps from './maps/happymaps';
import highlandmaps from  './maps/happymaps';
import onongmaps from './maps/onongmaps';
import tulipmaps from './maps/tulipmaps';
import airyterminalmaps from './maps/airyterminalmaps';
import treehousemaps from './maps/treehousemaps';
import mountinemaps from './maps/mountinemaps';

import bethesda from './rumahsakit/bethesda';
import gunungmaria from './rumahsakit/gunungmaria';
import rsud from './rumahsakit/rsud';


/**
 * -AppSwitchNavigator
 *  -Login
 *    -AppDrawerNavigator
 *      -Dashboard -DashboardStackNavigator(needed for header and to change
 *                  the header based on the tab)
 *        -DashboardTabNavigation
 *          -Tab 1 - Home
 *          -Tab 2 -About
 *        -Bisa tambah lagi sesuai keperluan kita.
 *   
 *  
 */
export default class App extends React.Component{
  render(){
    return(
       <AppContainer/>
    );
  }
}
//welcome screen
class WelcomeScreen extends Component{
  render(){
    return(
    <ImageBackground source={require('./assets/bg.jpg')} style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
    <View style={{flex:1, alignItems: 'center',justifyContent:'center'}}>
       <Button  title="Explore" type="outline"  style={{witdh:70}} onPress={()=> this.props.navigation.navigate('Dashboard')}/>
    </View>
    </ImageBackground>
    );
  }
}
//DashboardScreen
class DashboardScreen extends Component{
  render(){
    return(
    <View style={{flex:1, alignItems: 'center',justifyContent:'center'}}>
      <Text>DashboardScreen</Text>
    </View>
    );
  }
}

class Detail extends Component {

  render(){
    return (
       <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
           <Text>Detail Screen</Text>
       </View>
    
    );
  }
}



const Menu = createStackNavigator({
  Home:{
    screen: Home,
    navigationOptions:({navigation})=>{
      return{
        headerTitle: 'Home',
      
      }
    }
  },
  wisata:{screen: wisata},
  rumahsakit:{screen: rumahsakit},
  rumahmakan:{screen: rumahmakan},
  tempattinggal:{screen: tempattinggal},
  nodarurat:{screen:nodarurat},
  spbu:{screen:spbu},

  valentinehills:{screen: valentinehills},
  welu: {screen: welu},
  puncakkaisanti: {screen: puncakkaisanti},
  mahoni: {screen: mahoni},
  tetetana: {screen: tetetana},
  jendeladunia: {screen: jendeladunia},
  amphitheater: {screen: amphitheater},
  hutan: {screen: hutan},
  hutanpinus: {screen: hutanpinus},
  danaulinouw: {screen: danaulinouw},
  bukitdoa: {screen: bukitdoa},
  tumimperas: {screen: tumimperas},

  bakmikrendang: {screen: bakmikrendang},
  greengarden: {screen:greengarden},
  ikanbakar: {screen: ikanbakar},
  kfc: {screen: kfc},
  kobongcafe: {screen: kobongcafe},
  okoy: {screen: okoy},
  ragey: {screen: ragey},
  rminspirasi: {screen: rminspirasi},

  //SPBU
  spbu1: {screen:spbu1},
  spbu2: {screen:spbu2},
  spbu3: {screen:spbu3},
  spbu4: {screen:spbu4},
  spbu5: {screen:spbu5},
  spbu6: {screen:spbu6},

  //Homestay
  airy: {screen:airy},
  happy: {screen:happy},
  onong: {screen:onong},
  samaria: {screen:samaria},
  tulip: {screen:tulip},
  airyterminal: {screen:airyterminal},
  mountine: {screen:mountine},
  treehouse: {screen:treehouse},

  tarif: {screen:tarif},

  //Wisatamaps
  valenmaps:{screen: valenmaps},
  welumaps:{screen: welumaps},
  kaisantimaps:{screen: kaisantimaps},
  mahonimaps:{screen: mahonimaps},
  tetetanamaps:{screen: tetetanamaps},
  jendelamaps:{screen: jendelamaps},
  amphitheatermaps: {screen: amphitheatermaps},
  hutankotamaps: {screen: hutankotamaps},
  hutanpinusmaps: {screen: hutanpinusmaps},
  danaumaps: {screen: danaumaps},
  bukitdoamaps: {screen: bukitdoamaps},
  airterjun:{screen: airterjunmaps},

  //Rm maps
  bakmimaps:{screen: bakmimaps},
  kobongcafemaps:{screen: kobongcafemaps},
  greengardenmaps:{screen: greengardenmaps},
  kfcmaps:{screen:kfcmaps},
  ikanbakarmaps:{screen:ikanbakarmaps},
  rminspirasimaps:{screen:rminspirasimaps},
  okoymaps:{screen:okoymaps},
  rageymaps:{screen:rageymaps},

  //polresmaps
  polresmaps:{screen:polresmaps},

  //RS Maps
  bethesdamaps:{screen: bethesdamaps},
  gunungmariamaps:{screen: gunungmariamaps},
  rsudmaps:{screen:rsudmaps},

  //SPBU Maps
  spbu1maps:{screen: spbu1maps},
  spbu2maps:{screen: spbu2maps},
  spbu3maps:{screen: spbu3maps},
  spbu4maps:{screen: spbu4maps},
  spbu5maps:{screen: spbu5maps},
  spbu6maps:{screen: spbu6maps},

  airymaps:{screen: airymaps},
  happymaps:{screen: happymaps},
  highlandmaps:{screen: highlandmaps},
  onongmaps: {screen: onongmaps},
  tulipmaps: {screen: tulipmaps},
  airyterminalmaps:{screen: airyterminalmaps},
  mountinemaps:{screen:mountinemaps},
  treehousemaps:{screen:treehousemaps},

  bethesda:{screen: bethesda},
  gunungmaria:{screen:gunungmaria},
  rsud:{screen:rsud}

});

const AboutUs = createStackNavigator({
  About:{
    screen: About,
    navigationOptions:({navigation})=>{
      return{
        headerTitle: 'AboutUs',
      
      }
    }
  }
});

const DashboardTabNavigator = createBottomTabNavigator({
  Home:{
    screen: Menu,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-home" color={tintColor} size={30}/>
      )
    }
  },
  About:{
    screen: AboutUs,
    navigationOptions: {
      tabBarLabel: 'ABOUT',
      tabBarIcon: ({tintColor})=>(
        <Icon name="md-rose" color={tintColor} size={30}/>
      )
    }
  }
},{
  navigationOptions: ({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index];
    return{
    header: null,
    headerTitle: routeName  
    }
  }
}
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});



const AppSwtichNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppContainer = createAppContainer(AppSwtichNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});