import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const ConversationsList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>ConversationsList Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
});

export default ConversationsList;
