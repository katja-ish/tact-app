import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const ShareLink = () => {
  return (
    <View style={styles.shareContainer}>
      <Text fontSize={'big'} style={styles.shareLink}>
        tact.app/semilunar
      </Text>
      <Text style={styles.shareText}>Поделитесь быстрой ссылкой с друзьями, чтобы общаться</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shareContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.BG_GREY,
    height: 110,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 42,
  },
  shareLink: {
    color: Colors.SOFT_BLACK,
    opacity: 0.6,
    marginBottom: 12,
  },
  shareText: {
    textAlign: 'center',
    color: Colors.SOFT_BLACK,
    opacity: 0.35,
  },
});

export default ShareLink;
