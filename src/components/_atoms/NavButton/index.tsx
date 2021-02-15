import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavButton = ({ text }: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text fontSize="medium" style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

// const BGCOLOR = isActive ? Colors.STRONG_BLACK : 'none';
// const TEXTCOLOR = isActive ? Colors.WHITE : Colors.SYSTEM_GREY;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    height: 30,
    borderRadius: 40,
    paddingHorizontal: 16,
    backgroundColor: Colors.STRONG_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    color: Colors.WHITE,
    fontWeight: '600',
    letterSpacing: 0.2,
    lineHeight: 29,
  },
});

export default NavButton;
