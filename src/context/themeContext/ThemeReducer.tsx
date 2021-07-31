import {ThemeState} from './ThemeContext';

type ThemeAction = {type: 'changeTheme'; payload: boolean};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
};
