import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function SettingsDetails({ navigation }: any) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>SettingsDetails Screen</Text>
        <Button title="Go to Account" onPress={() => navigation.navigate('Account')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    height: '100%',
  },
  text: {
    fontSize: 32,
  },
});

export default SettingsDetails;
