import {Theme} from '@react-navigation/native';
import {colors} from '../../themes/appTheme';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.3)',
  colors: {
    primary: colors.orange,
    background: 'white',
    card: 'red',
    text: colors.blueDark,
    border: colors.orange,
    notification: colors.blueDark,
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0, 0, 0, 0.3)',
  colors: {
    primary: colors.orange,
    background: colors.blueDark,
    card: 'black',
    text: 'white',
    border: 'white',
    notification: colors.orange,
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme,
      };

    case 'set_dark_theme':
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
