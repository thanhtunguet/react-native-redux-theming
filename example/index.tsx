import { AppRegistry, StyleSheet, View } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import type { FC } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';

const AppEntry: FC = () => {
  return (
    <View style={[styles.safeArea]}>
      <Provider store={store}>
        <App />
      </Provider>
    </View>
  );
};

AppRegistry.registerComponent(appName, () => AppEntry);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
  },
});
