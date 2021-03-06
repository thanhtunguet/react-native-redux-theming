# react-native-redux-theming

Theming React Native app using Redux global state

## Demo

Expo demo available at: [https://snack.expo.dev/@thanhtunguet/react-native-redux-theming](https://snack.expo.dev/@thanhtunguet/react-native-redux-theming)

## Installation

```sh
yarn add react-native-redux-theming @reduxjs/toolkit react-redux redux
```

## Usage

### Create your own theme slice with initial theme map and default theme:
  ```tsx
  import { createThemeSlice, globalStyles } from 'react-native-redux-theming';

  export const themeSlice = createThemeSlice({
    currentTheme: 'light',
    themes: {
      light: {
        primaryColor: '#007bff',
        secondaryColor: '#6c757d',
        successColor: '#28a745',
        dangerColor: '#dc3545',
        infoColor: '#17a2b8',
        warningColor: '#ffc107',
        lightColor: '#f8f9fa',
        darkColor: '#343a40',
        mutedColor: '#6c757d',
      },
      dark: {
        primaryColor: '#007bff',
        secondaryColor: '#6c757d',
        successColor: '#28a745',
        dangerColor: '#dc3545',
        infoColor: '#17a2b8',
        warningColor: '#ffc107',
        lightColor: '#343a40',
        darkColor: '#f8f9fa',
        mutedColor: '#6c757d',
      },
    },
    globalStyles: globalStyles,
  });
  ```

### Configure redux store with created `themeSlice`:

  ```tsx
  export const store = configureStore({
    reducer: {
      theming: themeSlice.reducer,
      // ...others state slices
    },
    middleware: [
      // redux middlewares
    ],
  });
  ```
### useStyle

```tsx
export default function App() {
  const styles = useStyle(appStyles);
  const theme = useSelector(themeSelector);

  // Use Redux's dispatch function to dispatch theme actions
  const dispatch = useDispatch();
  const { changeTheme } = themeSlice.actions;

  return (
    <View style={[styles.container]}>
      <StatusBar
        barStyle={theme === 'dark' ? 'dark-content' : 'light-content'}
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
            dispatch(changeTheme('light'));
          }}
        />
        <Button
          title="Dark"
          onPress={() => {
            dispatch(changeTheme('dark'));
          }}
        />
      </View>
    </View>
  );
}
```

### changeTheme, setThemes

```tsx
const dispatch = useDispatch();
const { changeTheme, setThemes } = themeSlice.actions;
```

### useThemeValue

```ts
const primaryColor = useThemeValue('primaryColor');
const secondaryColor = useThemeValue('secondaryColor');
const successColor = useThemeValue('successColor');
const dangerColor = useThemeValue('dangerColor');
const infoColor = useThemeValue('infoColor');
const warningColor = useThemeValue('warningColor');
const lightColor = useThemeValue('lightColor');
const darkColor = useThemeValue('darkColor');
const mutedColor = useThemeValue('mutedColor');
// ...
```

### globalStyles

```ts
const globalStyles = useGlobalStyles();
```

## Contributing

Please feel free to fork the project or to create pull requests.
## License

MIT
