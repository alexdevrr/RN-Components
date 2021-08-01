import React, {createContext, useReducer} from 'react';
import {useColorScheme} from 'react-native';
import {themeReducer, ThemeState, lightTheme, darkTheme} from './ThemeReducer';

export interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  // TODO: leer el tema global del dispositivo...
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('Dark theme press');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('Ligth theme press');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
