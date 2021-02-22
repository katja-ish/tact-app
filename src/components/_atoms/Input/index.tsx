import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors } from '@app/theme';

const Input = ({ value, onChangeText }: any) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      autoCapitalize="none"></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'TTCommons-Medium',
    color: Colors.SOFT_BLACK,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    width: '100%',
    fontSize: 18,
    paddingLeft: 16,
  },
});

export default Input;
