import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity } from 'react-native';
import constants from 'expo-constants';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
       <View style={styles.goback}>
        <View style={styles.contenido}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Start')}>
          {/*<Image source={require('../../assets/images/flech.png')} style={styles.flech}/>*/}
          <Text style={styles.go}>back</Text>
        </TouchableOpacity>
         </View>
      </View>
      <Image source={require('../.../../assets/images/images/blue-gradient2.png')} style={styles.image} />
      <Text style={styles.title}>Register</Text>
      <StatusBar style="auto" />
        <View>
            <View style={styles.Registers}>
             <ScrollView>
             <Text style={styles.Texts}>hola</Text>
             </ScrollView>
            </View>
        </View>  

      {/*barra */}
      <View  style={styles.barra}>
      <View style={styles.contenido}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
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
   opacity: 0.4,
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
  title: {
    position: 'static',
    top: 100,
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    top: 140
  },
  image: {
    width: 500,
    height: 390,
    position: 'absolute',
    top: 0,
    left: 165,
  },
  Registers: {
    backgroundColor:'#BEE7FF',
    width: 380,
    height: 500,
    position: 'estatic',
    top: 50,
    borderRadius: 20
  },
  Texts:{
    margin: 15,
    textAlign: 'auto',
    fontSize: 16
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
