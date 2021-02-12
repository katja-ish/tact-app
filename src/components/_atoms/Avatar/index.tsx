import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const Avatar = ({ image }: any, { size }: any) => {
  return <View style={styles.avatar}></View>;
};

const styles = StyleSheet.create({
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
});

export default Avatar;
