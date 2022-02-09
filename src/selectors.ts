import type { ThemingGlobalState } from './types';

export const themeSelector = (state: ThemingGlobalState) =>
  state.theming.currentTheme;

export const themesSelector = (state: ThemingGlobalState) =>
  state.theming.themes;
