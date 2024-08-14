import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image,Button } from 'react-native';
import constants from 'expo-constants';

export default function Start({navigation}) {
  

  return (
    <View style={styles.container}>
     {/* <Image source={require('../../assets/images/blue-gradient2.png')} style={styles.image} />*/}
     <Text style={styles.title}>Welcome...</Text>
      <View style={styles.image1}>
        <Image source={require('../../assets/images/xd.jpg')} style={styles.inicio}/>
        </View>
        <View style={styles.data}>
          <Text style={styles.data1}>Luis Gutierrez</Text>
          <Text style={styles.data2}>Admin</Text>
        </View>
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
  title:{
    position:'absolute',
    top: 100,
    fontSize: 30,
    left: 50,
    fontWeight: 'bold'
  },
  image1: {
    position: 'absolute',
    top: 160,
    shadowColor: '#000', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.8, // Opacidad de la sombra
    shadowRadius: 10.84, // Radio de desenfoque de la sombra
    // Para Android
    elevation: 5, // Altura de la sombra
      // Para asegurar que la sombra no esté oculta por el borde de la imagen
      marginBottom: 10,
  },
  data: {
    position: 'absolute',
    bottom: 200,
    left: 50
  },
  data1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  data2: {
     color: 'white',
     fontSize: 20
  },
  inicio: {
    width: 350,
    height: 600,
    borderRadius: 30
  },
  flech: {
    width: 10,
    height: 10
  },
  image: {
    width: 500,
    height: 390,
    position: 'absolute',
    top: 0,
    left: 165,
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
