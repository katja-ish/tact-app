import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Account, SettingsDetails } from '@app/screens';

const Stack = createStackNavigator();

const Settings = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="SettingsDetails">
          <Stack.Screen
            name="SettingsDetails"
            component={SettingsDetails}
            options={{ title: 'Settings' }}
          />
          <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
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
