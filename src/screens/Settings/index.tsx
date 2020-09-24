import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Account, SettingsDetails } from '@app/screens';

const Stack = createStackNavigator();

const Settings = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsDetails">
      <Stack.Screen
        name="SettingsDetails"
        component={SettingsDetails}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default Settings;
