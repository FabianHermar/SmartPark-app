import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './Start';
import Profile from './Profile'
import Admins from './Admins';
import Clients from './Clients';
import Memberships from './Memberships';
import Register from './Register';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';
import constants from 'expo-constants';
 const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={Start} options={{headerShown: false}}/>
        <Stack.Screen name='Admins' component={Admins} options={{headerShown: false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name='Clients' component={Clients} options={{headerShown: false}}/>
        <Stack.Screen name='Membership' component={Memberships} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}