import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Singup from '../screens/Singup';
import Home from '../screens/Home';
import Forget from '../screens/Forget';

const Stack = createStackNavigator();
const Appnavigator = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Splash' component={Splash}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Singup' component={Singup}/>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='Forget' component={Forget}/>
   </Stack.Navigator>
  )
}

export default Appnavigator

const styles = StyleSheet.create({})