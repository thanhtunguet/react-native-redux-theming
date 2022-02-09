import * as React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { themeSelector, useStyle } from 'react-native-redux-theming';
import { useDispatch, useSelector } from 'react-redux';
import { themeSlice } from './store';
import { appStyles } from './App.styles';

export default function App() {
  const styles = useStyle(appStyles);
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const { changeTheme } = themeSlice.actions;

  const handleChangeTheme = React.useCallback(
    (themeName: string) => {
      dispatch(changeTheme(themeName));
    },
    [changeTheme, dispatch]
  );

  return (
    <View style={[styles.container]}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Text style={styles.welcome}>React Native Redux Theming</Text>
      <Text style={styles.instructions}>
        Using Redux as global state manager
      </Text>
      <Text style={styles.instructions}>
        You can now create your themes using JSON. The styles declaration is
        directly compatible with StyleSheet.create. You just need to replace
        `StyleSheet.create` with `createStyle` and add your theme variables in
        the styles.
      </Text>
      <View style={styles.actions}>
        <Button
          title="Light"
          onPress={() => {
            handleChangeTheme('light');
          }}
        />
        <Button
          title="Dark"
          onPress={() => {
            handleChangeTheme('dark');
          }}
        />
      </View>
    </View>
  );
}
