import { StyleSheet, TextStyle } from 'react-native';

export const Fonts = StyleSheet.create({
  normal: {
    fontWeight: 'normal',
    // fontFamily: 'Editorial Grotesk',
  },
  bold: {
    fontWeight: 'bold',
    // fontFamily: 'Editorial Grotesk',
  },
});

export const FontSize = StyleSheet.create({
  ultraSmall: {
    fontSize: 11,
    lineHeight: 13,
  } as TextStyle,
  small: {
    fontSize: 13,
    lineHeight: 16,
  } as TextStyle,
  medium: {
    fontSize: 15,
    lineHeight: 18,
  } as TextStyle,
  large: {
    fontSize: 17,
    lineHeight: 20,
  } as TextStyle,
});

export const FontStyle = StyleSheet.create({
  center: {
    textAlign: 'center',
  } as TextStyle,
});
