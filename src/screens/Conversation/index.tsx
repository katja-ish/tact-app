import { Text } from '@app/theme';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

const Conversation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text fontSize={'h1'}>Conversation</Text>
        <Text fontSize={'small'}>Имя Собеседника will go here</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Conversation;
