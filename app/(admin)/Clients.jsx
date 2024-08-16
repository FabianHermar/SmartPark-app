import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity } from 'react-native';
import constants from 'expo-constants';

export default function Clients({navigation}) {
  const tableHead = ['ID', 'NAME', 'LASTNAME', 'BIRTHDAY', 'NUMBER', 'EMAIL', 'PASSWORD'];
  const tableData = [
    ['1', 'Melani', 'Ruvalcaba', '17/02/2003', '4651292330', 'melani@gmail.com', '123'],
    ['2', 'Jorge', 'Almanza', '29/03/2003', '4651292330', 'jorge@gmail.com', '123'],
    ['3', 'Omar', 'Ortiz', '19/02/2003', '4651292330', 'Omar@gmail.com', '123'],
    ['4', 'Feranda', 'Romo', '17/08/2003', '4651292330', 'fernanda@gmail.com', '123']
  ];

  return (
    <View style={styles.container}>
       <View style={styles.goback}>
        <View style={styles.contenido}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Start')}>
          {/*<Image source={require('./assets/flech.png')} style={styles.flech}/>*/}
          <Text style={styles.go}>back</Text>
        </TouchableOpacity>
         </View>
      </View>
      <Image source={require('../../assets/images/blue-gradient2.png')} style={styles.image} />
      <Text style={styles.title}>Clients</Text>
      <StatusBar style="auto" />
      <ScrollView horizontal={true}>
        <View style={styles.table}>
          <View style={styles.head}>
            {tableHead.map((item, index) => (
              <Text key={index} style={styles.title_head}>{item}</Text>
            ))}
          </View>
          <ScrollView style={styles.dataWrapper}>
            {tableData.map((rowData, index) => (
              <View key={index} style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
                {rowData.map((cellData, cellIndex) => (
                  <Text key={cellIndex} style={styles.text}>{cellData}</Text>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>


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
  head: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#83D1FF',
    //borderWidth: 1,
    //borderColor: '#000',
  },
  title_head: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 6,
    width: 200, 
  },
  text: {
    margin: 6,
    width: 200,
    textAlign: 'center',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: '#BEE7FF',
  },
  evenRow: {
    backgroundColor: '#fff', // Color para las filas pares
  },
  oddRow: {
    backgroundColor: '#BEE7FF', // Color para las filas impares
  },
  title: {
    position: 'static',
    top: 100,
    fontSize: 40,
    fontWeight: 'bold',
  },
  image: {
    width: 500,
    height: 390,
    position: 'absolute',
    top: 0,
    left: 165,
  },
  table: {
    position: 'static',
    top: 200,
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
