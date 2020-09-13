import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const Conversation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Conversation Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
});

export default Conversation;
