import { Text } from '@app/theme';
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

const Conversation = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text fontSize={'h1'}>Друг {navigation.getParam('givenName')}</Text>
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
