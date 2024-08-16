import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity } from 'react-native';
import constants from 'expo-constants';

export default function Profile({navigation}) {
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/jeje.jpg')} style={styles.image} />
      <View style={styles.goback}>
        <View style={styles.contenido}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Start')}>
          {/*<Image source={require('../../assets/images/flech.png')} style={styles.flech}/>*/}
          <Text style={styles.go}>back</Text>
        </TouchableOpacity>
         </View>
      </View>
      
      <View style={styles.profile}>
            <Image source={require('../../assets/images/profile.jpg')} style={styles.imgprofile}/>
            <View style={styles.user}><Text style={styles.username}>Luis Gutierrez</Text></View>
      </View>
      <View style={styles.xd}>
        <Text style={styles.title1}>Personal information</Text>
      <ScrollView horizontal={true}>
          <View>
            <View style={styles.dates}>
              <View style={styles.names}>
              <View style={styles.text1}>
              <Text style={styles.tex0}>Name</Text>
              </View>
                <View style={styles.text1}>
                <Text style={styles.tex0}>Last Name</Text>
              </View>
              </View>
              {/*Nombres */}
              <View style={styles.names}>
              <View style={styles.text2}>
              <Text style={styles.tex00}>Luis</Text>
              </View>
                <View style={styles.text2}>
                <Text style={styles.tex00}>Gutierrez</Text>
              </View>
              </View>
              {/*daitos_titulos*/}
              <View style={styles.names}>
              <View style={styles.text1}>
              <Text style={styles.tex0}>Number</Text>
              </View>
                <View style={styles.text1}>
                <Text style={styles.tex0}>Email</Text>
              </View>
              </View>
              {/*daitos_titulos*/}
              <View style={styles.names}>
              <View style={styles.text2}>
              <Text style={styles.tex00}>4651292330</Text>
              </View>
                <View style={styles.text2}>
                <Text style={styles.tex00}>luisgutierrez@gmail.com</Text>
              </View>
              </View>
            </View>
          </View>
      </ScrollView>
      </View>
      
      
      {/*barra */}
      <View  style={styles.barra}>
      <View style={styles.contenido}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Membership')}>
        <Image source={require('../../assets/images/Perfil.png')} style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admins')}>
            {/*<Text>Hola</Text>*/}
            <Image source={require('../../assets/images/Admin.png')} style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Clients')}>
        <Image source={require('../../assets/images/clients.png')} style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Membership')}>
        <Image source={require('../../assets/images/membership.png')} style={styles.icons}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Image source={require('../../assets/images/register.png')} style={styles.icons}/>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: constants.statusBarHeight,
    padding: 10,
    paddingTop: 30,
  },
  go: {
    color: '#000000',
    fontWeight: 'bold',
  },
  goback:{
   backgroundColor: '#a9a9a9',
   opacity: 0.7,
    width: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    left: 25,
    //borderWidth: 2, 
    
  },
  contenido: {
    flexDirection: 'row',
    padding: 10
  },
  image: {
    width: 500,
    height: 250,
    position: 'absolute',
    top: 0,
  },
  profile:{
    //backgroundColor: '#83D1FF',
    width:100,
    height: 100,
    position: 'absolute',
    bottom: 600,
    borderRadius:100,
    left:140
  },
  imgprofile: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  user: {
    position: 'static',
    top: 10,
    right: 80
  },
  username:{
    width:'300%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  dates:{
    position:'static',
    left:40,
    top: 10,
    alignItems: 'center',
  },
  names:{
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    
  },
  xd: {
   position:'absolute',
   top: 450,
    width: 400,
    height:300 ,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#a9a9a9', 
  },
  title1:{
    fontWeight: 'bold',
    margin: 15,
    fontSize: 15
  },
  text1: {
    width:'50%',
    textAlign: 'center',
  },
  tex0: {
    color:'#a9a9a9',
    fontSize: 12
  },
  text2: {
    width:'50%',
    textAlign: 'center'
  },
  tex00: {
    //fontWeight: 'bold',
    fontSize: 15
  },
  barra: {
    backgroundColor: '#232323',
    width: 370,
    height: 50,
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    borderRadius: 20, // Aquí redondeas las esquinas
    margin: 10,
    justifyContent: 'center',
  },
  contenido: {
    flexDirection: 'row',
    padding: 10
  },
  button: {
    width: '20%',
    
  },
  icons: {
    position: 'static',
    left:18,
    width: 35,
    height: 35
  }
});
