import React from 'react';
import { StyleSheet, Text as TextBase, TextProps } from 'react-native';
import { Fonts, FontSize, FontStyle } from '@app/theme/fonts';

interface IProps extends TextProps {
  fontSize?: 'ultraSmall' | 'small' | 'medium' | 'big' | 'large';
}

const Text: React.FC<IProps> = ({ style, fontSize = 'medium', ...rest }) => {
  return <TextBase {...rest} style={[styles.font, FontSize[fontSize], style]} />;
};

export default Text;

const styles = StyleSheet.create({
  font: {
    ...Fonts.normal,
  },
});
