import React from 'react';
import Navigation from './src/stack/Navigation';
import {StatusBar} from 'react-native';
import ThemeProvider from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <AppState>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
