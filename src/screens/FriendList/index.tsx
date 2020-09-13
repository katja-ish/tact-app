import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const FriendList = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>FriendList Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    height: '100%',
  },
  text: {
    fontSize: 32,
  },
});

export default FriendList;
