import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { CONTACT_LIST, CONTACT_DETAIL, CREATE_CONTACT, SETTINGS } from '../context/routeName';
import Contacts from '../screens/Contacts/index';
import ContactDetail from '../screens/ContactDetail/index';
import CreateContact from '../screens/CreateContact/index';
import Settings from '../screens/Settings/index';

const HomeNavigator = () =>{
  const HomeStack = createStackNavigator();
  return <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>

  </HomeStack.Navigator>
};


export default HomeNavigator;