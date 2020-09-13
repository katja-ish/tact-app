import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
});

export default Settings;
