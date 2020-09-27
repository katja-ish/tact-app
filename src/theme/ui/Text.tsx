import React from 'react';
import { StyleSheet, Text as TextBase, TextProps } from 'react-native';
import { Fonts } from '@app/theme/fonts';

interface IProps extends TextProps {}

const Text: React.FC<IProps> = ({ style, ...rest }) => {
  return <TextBase {...rest} style={[styles.font, style]} />;
};

export default Text;

const styles = StyleSheet.create({
  font: {
    ...Fonts.normal,
  },
});
