import React, { Component } from 'react';
import { Appbar, Searchbar,Avatar} from 'react-native-paper';
import { ScrollView, StyleSheet, View ,Text,Button} from 'react-native';
  export default class App extends Component {
render(){
  return(
    
  <View style={{ flex:1 ,justifyContent:'space-between',backgroundColor: "#E0E0E0"}}>
 <Appbar style={styles.bottom}>
          <Appbar.Content title="LoDeep"  />
          <Appbar.Action icon="home"  size={17} onPress={() => console.log('HOME')} />

          <Appbar.Action icon="plus" size={17} onPress={() => console.log('plus')} />
          
          <Appbar.Action icon="contacts"  size={17} onPress={() => console.log('HOME')} />
          <Appbar.Action icon="chart-line"  size={17} onPress={() => console.log('HOME')} />

          <Appbar.Action icon="notification-clear-all"  size={17} onPress={() => console.log('Pressed mail')} />
          <Appbar.Action icon="cog"  size={17} onPress={() => console.log('cog pressed')} />
          <Appbar.Action icon="logout"  size={17} onPress={() => console.log('logout pressed')} />
  </Appbar>
  

         <View style={{flex:1 ,marginTop:16, marginRight:10 ,marginLeft:10}}> 
           <Searchbar placeholder="i want to study with" icon={ require('./logo1.png')} ></Searchbar>
      <View>

      <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 10 ,marginTop:15}}>
      <View style={{flex:2, marginRight: 5,flexDirection:"row"}}>
        <View>
            <Avatar.Image size={80} source ={require('./logo.png') }></Avatar.Image>
        </View>
        <View style={{marginLeft:5}}> 
          <Text style={{ fontWeight: 'bold' ,fontSize :20 }}>Meryem Ghrib</Text>
          <Text style={{fontSize :15 }}>Student</Text>
          <Text style={{fontSize :14 }}>Tunisia</Text>
        </View>
      </View>
    </View> 
  </View>
  </View>
  </View> 
 );

  }}
const styles = StyleSheet.create({
  bottom: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:"#FFFFFF"  },
    container: {

    }

});