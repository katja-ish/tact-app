import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const Account = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Account Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
});

export default Account;
