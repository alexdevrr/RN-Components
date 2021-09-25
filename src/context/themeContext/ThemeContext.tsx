import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance, AppState} from 'react-native';
import {themeReducer, ThemeState, lightTheme, darkTheme} from './ThemeReducer';

export interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: any) => {
  // const colorScheme = useColorScheme();

  // TODO: leer el tema global del dispositivo...
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'dark'
          ? setDarkTheme()
          : setLightTheme();
      }
    });
  }, []);
  // TODO: Aquí termina el proceso para obtener el theme general del dispositivo

  // SOLO FUNCIONA EN IOS
  // useEffect(() => {
  //   colorScheme === 'light' ? setDarkTheme : setLightTheme;
  // }, [colorScheme]);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
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
