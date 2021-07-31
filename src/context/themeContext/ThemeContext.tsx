import React, {createContext, useReducer} from 'react';
import {themeReducer} from './ThemeReducer';

export interface ThemeState {
  isLoggedIn: boolean;
  darkTheme: boolean;
  ligthTheme: boolean;
}

export const themeInitialState: ThemeState = {
  isLoggedIn: false,
  darkTheme: false,
  ligthTheme: true,
};

export interface ThemeContextProps {
  themeState: ThemeState;
  changeTheme: (estado: boolean) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: any) => {
  const [themeState, dispatch] = useReducer(themeReducer, themeInitialState);

  const changeTheme = (estado: boolean) => {
    dispatch({type: 'changeTheme', payload: estado});
  };

  return (
    <ThemeContext.Provider
      value={{
        themeState,
        changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
