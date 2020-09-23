import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const FriendList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>FriendList Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightyellow',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
});

export default FriendList;
