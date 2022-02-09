import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export const appStyles: Record<string, TextStyle | ViewStyle | ImageStyle> = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '@darkColor',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '@lightColor',
  },
  instructions: {
    textAlign: 'center',
    color: '@mutedColor',
    marginBottom: 5,
  },
  icon: {
    width: 60,
    height: 60,
  },
  genericButton: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '@primaryColor',
  },
  buttonText: {
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
};
