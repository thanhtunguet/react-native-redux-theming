import { createSlice } from '@reduxjs/toolkit';
import type { ThemeSliceState, ThemeStyle, ThemingGlobalState } from './types';
import { transformColors } from './transform-colors';
import { globalStyles } from './global-styles';

export function createThemeSlice<T = {}>(
  initialState: Omit<ThemeSliceState<T>, 'globalStyles'> = {
    themes: {},
    currentTheme: 'default',
  }
) {
  return createSlice({
    name: 'theming',
    initialState: {
      ...initialState,
      globalStyles,
    },
    reducers: {
      setThemes(
        state: ThemingGlobalState['theming'],
        action: {
          type: string;
          payload: Record<string, ThemeStyle>;
        }
      ) {
        state.themes = action.payload;
        state.globalStyles = transformColors(
          globalStyles,
          state.themes[state.currentTheme]
        );
      },
      changeTheme(
        state: ThemingGlobalState['theming'],
        action: {
          type: string;
          payload: keyof ThemingGlobalState['theming']['themes'];
        }
      ) {
        const currentTheme = action.payload;
        state.currentTheme = currentTheme;
        state.globalStyles = transformColors(
          globalStyles,
          state.themes[currentTheme]
        );
      },
    },
  });
}
