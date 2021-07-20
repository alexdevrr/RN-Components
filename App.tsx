import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/stack/Navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
