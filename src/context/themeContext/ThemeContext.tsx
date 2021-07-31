import React, {createContext, useReducer} from 'react';
import {themeReducer, ThemeState, lightTheme} from './ThemeReducer';

export interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: any) => {
  // TODO: leer el tema global...
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

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
