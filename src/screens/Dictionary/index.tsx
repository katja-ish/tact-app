import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import DictionaryCardPreview from '@app/components/_organisms/DictionaryCardPreview';

const Dictionary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DictionaryCardPreview />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
});

export default Dictionary;
