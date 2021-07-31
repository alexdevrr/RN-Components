import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
  DarkTheme,
} from '@react-navigation/native';
import Navigation from './src/stack/Navigation';
import {StatusBar} from 'react-native';
import ThemeProvider from './src/context/themeContext/ThemeContext';

const cutomTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={cutomTheme}>
      <AppState>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
