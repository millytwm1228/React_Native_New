/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppNavContainer from './src/navigations/index';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
     <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

export default App;
