import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Button } from 'react-native';

function SettingsDetails({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>SettingsDetails Screen</Text>
        <Button title="Изменить аккаунт" onPress={() => navigation.navigate('Account')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 32,
  },
});

export default SettingsDetails;
