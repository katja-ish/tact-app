import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Colors } from '@app/theme';

const ShareLink = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text fontSize={'big'} style={styles.link}>
        tact.app/semilunar
      </Text>
      <Text style={styles.text}>Поделитесь быстрой ссылкой с друзьями, чтобы общаться</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.BG_GREY,
    height: 110,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 42,
  },
  link: {
    color: Colors.SOFT_BLACK,
    opacity: 0.6,
    marginBottom: 12,
    fontFamily: 'TTCommons-Regular',
  },
  text: {
    textAlign: 'center',
    color: Colors.SOFT_BLACK,
    opacity: 0.35,
    fontSize: 18,
    fontFamily: 'TTCommons-Regular',
  },
});

export default ShareLink;
