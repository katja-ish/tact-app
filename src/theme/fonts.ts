import { StyleSheet, TextStyle } from 'react-native';

export const Fonts = StyleSheet.create({
  normal: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export const FontSize = StyleSheet.create({
  ultraSmall: {
    fontSize: 11,
    lineHeight: 13,
  } as TextStyle,
  small: {
    fontSize: 13,
    lineHeight: 15,
  } as TextStyle,
  medium: {
    fontSize: 15,
    lineHeight: 18,
  } as TextStyle,
  buttonText: {
    fontSize: 16,
    lineHeight: 22,
  } as TextStyle,
  big: {
    fontSize: 18,
    lineHeight: 20,
  } as TextStyle,
  h1: {
    fontSize: 22,
    lineHeight: 25,
  } as TextStyle,
  large: {
    fontSize: 34,
    lineHeight: 41,
  } as TextStyle,
});

export const FontStyle = StyleSheet.create({
  center: {
    textAlign: 'center',
  } as TextStyle,
});
