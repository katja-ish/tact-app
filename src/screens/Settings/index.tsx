import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const Settings = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    height: '100%',
  },
  text: {
    fontSize: 32,
  },
});

export default Settings;
