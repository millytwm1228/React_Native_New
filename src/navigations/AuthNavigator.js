import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN, REGISTER } from '../context/routeName';
import Login from '../screens/Login/index';
import Register from '../screens/Register/index';


const AuthNavigator = () =>{
  const AuthStack = createStackNavigator();
  return <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
  </AuthStack.Navigator>
};


export default AuthNavigator;