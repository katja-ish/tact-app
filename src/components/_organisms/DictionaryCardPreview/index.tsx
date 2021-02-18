import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Colors } from '@app/theme';

const DictionaryCardPreview = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Радость</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: '#ECF1F5',
    height: 200,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    color: Colors.BOOKSHELF_BLUE,
    fontSize: 25,
    lineHeight: 29,
    fontFamily: 'TTCommons-Medium',
  },
});

export default DictionaryCardPreview;
