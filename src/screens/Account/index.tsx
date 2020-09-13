import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const Account = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Account Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    height: '100%',
  },
  text: {
    fontSize: 32,
  },
});

export default Account;
