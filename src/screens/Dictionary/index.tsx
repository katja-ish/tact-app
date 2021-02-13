import React from 'react';
import { Text, Colors } from '@app/theme';
import { View, SafeAreaView, StyleSheet } from 'react-native';

const Dictionary = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Dictionary</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dictionary;
